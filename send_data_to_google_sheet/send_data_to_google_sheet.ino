#include <SPI.h>
#include <MFRC522.h>
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <WiFiClientSecureBearSSL.h>

// Fingerprint for demo URL, expires on June 2, 2021, needs to be updated well before this date
const uint8_t fingerprint[20] = {0x2b, 0xb5, 0xf0, 0x49, 0xbb, 0x7a, 0xde, 0xcb, 0x2f, 0x32, 0x67, 0x2e, 0x10, 0xd5, 0x45, 0x3e, 0xbe, 0x2c, 0x18, 0x0b};
// 4a 2e b2 a8 29 12 9a ca ac e1 e0 f4 a0 6c 74 4b 4b 7d 5b ab
// 36 D7 12 4A 15 13 E6 AA 83 AB A4 E5 DF A5 AA AF
// 2B B5 F0 49 BB 7A DE CB 2F 32 67 2E 10 D5 45 3E BE 2C 18 0B

#define RST_PIN  D3     // Configurable, see typical pin layout above
#define SS_PIN   D4     // Configurable, see typical pin layout above
#define BUZZER   D2     // Configurable, see typical pin layout above

MFRC522 mfrc522(SS_PIN, RST_PIN);  // Instance of the class
MFRC522::MIFARE_Key key;  
ESP8266WiFiMulti WiFiMulti;
MFRC522::StatusCode status;      

/* Be aware of Sector Trailer Blocks */
int blockNum = 2;  
int turnonoff=0;
const int sensorIn = A0;
int mVperAmp = 185; // use 185 for 5A, 100 for 20A Module and 66 for 30A Module
double Voltage = 0;
double VRMS = 0;
double AmpsRMS = 0;
double Wattage=0;
/* Create another array to read data from Block */
/* Legthn of buffer should be 2 Bytes more than the size of Block (16 Bytes) */
byte bufferLen = 20;
byte readBlockData[20];

String data2;
const String data1 = "https://script.google.com/macros/s/AKfycbwNKKQvqlYteZliBV-3EJq5P38wtFhD6DF7vaDzt5MZtdkLBO3RQP74zlg55zNOZtT_Uw/exec?name=";

void setup() 
{
  /* Initialize serial communications with the PC */
  //Serial.begin(9600);
  // Serial.setDebugOutput(true);
      pinMode(A0, INPUT);
      Serial.begin(9600);
      delay(10);
      Serial.println(F("Init...."));
  Serial.println();
  Serial.println();
  Serial.println();

  for (uint8_t t = 4; t > 0; t--) 
  {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  
  /* Put your WIFI Name and Password here */
  WiFiMulti.addAP("Bhuvi's Laptop", "11111112");

  /* Set BUZZER as OUTPUT */
  pinMode(BUZZER, OUTPUT);
  /* Initialize SPI bus */
  SPI.begin();
}

void loop()
{
   Voltage = getVPP();
 VRMS = (Voltage/2.0) *0.707; // sq root
 AmpsRMS = (VRMS * 1000)/mVperAmp;
 Wattage = (220*AmpsRMS); //Observed 18-20 Watt when no load was connected, so substracting offset value to get real consumption.
 Serial.print(AmpsRMS/1.75);
 Serial.println(" Amps RMS ");
 Serial.print(Wattage/1.75); 
 Serial.println(" Watt ");
 //ReadContinues();
  /* Initialize MFRC522 Module */
  mfrc522.PCD_Init();
  /* Look for new cards */
  /* Reset the loop if no new card is present on RC522 Reader */
  if ( ! mfrc522.PICC_IsNewCardPresent())
  {
    return;
  }
  /* Select one of the cards */
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  /* Read data from the same block */
  Serial.println();
  Serial.println(F("Reading last data from RFID..."));
  ReadDataFromBlock(blockNum, readBlockData);
  /* If you want to print the full memory dump, uncomment the next line */
  //mfrc522.PICC_DumpToSerial(&(mfrc522.uid));
  /* Print the data read from block */
  Serial.println();
  Serial.print(F("Last data in RFID:"));
  Serial.print(blockNum);
  Serial.print(F(" --> "));
  for (int j=0 ; j<16 ; j++)
  {
    Serial.write(readBlockData[j]);
  }
  Serial.println();
  /*digitalWrite(BUZZER, HIGH);
  delay(200);
  digitalWrite(BUZZER, LOW);
  delay(200);
  digitalWrite(BUZZER, HIGH);
  delay(200);
  digitalWrite(BUZZER, LOW);*/
  
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) 
  {
    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);

    client->setFingerprint(fingerprint);
    // Or, if you happy to ignore the SSL certificate, then use the following line instead:
    // client->setInsecure();
    //requesting URL: /macros/s/AKfycbybwYsIQr9WN0lno62oUJYG3SCHcWsytaJGiP3bJ50-ULPTfxBzP-h-7syPK1Y7CaRO5A/exec?temperature=0.01&humidity=0.06
    ///script.google.com/macros/s/AKfycbzGEHXN727-QIisa2sky-RR36ARPUWViX6BS7SqEQ2-limCH0EozMsbrmbrATyMfx310w/exec?name=SASI&Voltage=0.01
    data2 = data1 + String((char*)readBlockData)+"&Voltage="+String(Wattage/AmpsRMS)+"&Current="+String(AmpsRMS)+"&Power="+String(Wattage);
    data2.trim();
    Serial.println("Complet Url"+data2);
    
    HTTPClient https;
    Serial.print(F("[HTTPS] begin...\n"));
    if (https.begin(*client, (String)data2))
    {  
      // HTTP
      Serial.print(F("[HTTPS] GET...\n"));
      // start connection and send HTTP header
      int httpCode = https.GET();
    
      // httpCode will be negative on error
      if (httpCode > 0) 
      {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTPS] GET... code: %d\n", httpCode);
        // file found at server
      }
      else 
      {
        Serial.printf("[HTTPS] GET... failed, error: %s\n", https.errorToString(httpCode).c_str());
      }
      https.end();
      delay(5000);
    } 
    else 
    {
      Serial.printf("[HTTPS} Unable to connect\n");
    }



  }
}

void ReadContinues(){
      data2 = data1 + String((char*)readBlockData)+"&Voltage="+String(Wattage/AmpsRMS)+"&Current="+String(AmpsRMS)+"&Power="+String(Wattage);
    data2.trim();
    Serial.println("Complet Url"+data2);
    HTTPClient https;
        std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);
    client->setFingerprint(fingerprint);
    
    Serial.print(F("[HTTPS] begin...\n"));
    if (https.begin(*client,(String)data2))
    {  
      // HTTP
      Serial.print(F("[HTTPS] GET...\n"));
      // start connection and send HTTP header
      int httpCode = https.GET();
    
      // httpCode will be negative on error
      if (httpCode > 0) 
      {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTPS] GET... code: %d\n", httpCode);
        // file found at server
      }
      else 
      {
        Serial.printf("[HTTPS] GET... failed, error: %s\n", https.errorToString(httpCode).c_str());
      }
      https.end();
      delay(5000);
    } 
    else 
    {
      Serial.printf("[HTTPS} Unable to connect\n");
    }
}

float getVPP()
{
  float result;
  
  int readValue;             //value read from the sensor
  int maxValue = 0;          // store max value here
  int minValue = 1024;          // store min value here
  
   uint32_t start_time = millis();

   while((millis()-start_time) < 1000) //sample for 1 Sec
   {
       readValue = analogRead(sensorIn);
       // see if you have a new maxValue
       if (readValue > maxValue) 
       {
           /*record the maximum sensor value*/
           maxValue = readValue;
       }
       if (readValue < minValue) 
       {
           /*record the maximum sensor value*/
           minValue = readValue;
       }
/*       Serial.print(readValue);
       Serial.println(" readValue ");
       Serial.print(maxValue);
       Serial.println(" maxValue ");
       Serial.print(minValue);
       Serial.println(" minValue ");
       delay(1000); */
    }
   
   // Subtract min from max
   result = ((maxValue - minValue) * 5)/1024.0;
      
   return result;
 }


void ReadDataFromBlock(int blockNum, byte readBlockData[]) 
{ 
  /* Prepare the ksy for authentication */
  /* All keys are set to FFFFFFFFFFFFh at chip delivery from the factory */
  for (byte i = 0; i < 6; i++)
  {
    key.keyByte[i] = 0xFF;
  }
  /* Authenticating the desired data block for Read access using Key A */
  status = mfrc522.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, blockNum, &key, &(mfrc522.uid));

  if (status != MFRC522::STATUS_OK)
  {
     Serial.print("Authentication failed for Read: ");
     Serial.println(mfrc522.GetStatusCodeName(status));
     return;
  }
  else
  {
    if(turnonoff == 0 ){
      turnonoff = 1;
      digitalWrite(BUZZER, HIGH);
      Serial.println("on");
    }else {
    turnonoff = 0;
    digitalWrite(BUZZER, LOW);
    Serial.println("off");
    }
    Serial.println("Authentication success");

  }

  /* Reading data from the Block */
  status = mfrc522.MIFARE_Read(blockNum, readBlockData, & bufferLen);
  if (status != MFRC522::STATUS_OK)
  {
    Serial.print("Reading failed: ");
    Serial.println(mfrc522.GetStatusCodeName(status));
    return;
  }
  else
  {
    Serial.println("Block was read successfully");  
  }
}
