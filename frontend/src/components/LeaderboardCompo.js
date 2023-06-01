import React from "react";
import arbol from '../assets/img/arbol2.jpg';
import img1 from '../assets/img/messages-1.jpg';
import img2 from '../assets/img/messages-2.jpg';
import img3 from '../assets/img/messages-3.jpg';
import img4 from '../assets/img/messages-4.jfif';
import img5 from '../assets/img/messages-5.jfif';
import '../estilosLeader.css'

function LeadeboarComponent(){
    
    return(
        <main id="main" class="main">

            <div class="pagetitle">
            <h1>Leaderboard</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item">appliances</li>
                <li class="breadcrumb-item active">Leaderboard</li>
                </ol>
            </nav>
            </div>
            {/* End Page Title */}

            
            <div class="row-cols-md-3">
                <div class="card-body contenedorLead">  
                    <div className="leadInz">
                        <div className="photoLe"><img src={img1}/></div> 
                        <div className="fullName">
                            Bisila ABAGA ASUMU
                        </div>     
                        <div className="informacion">
                            <div className="iconoNum">
                                <div className="num">27</div>
                                <div className="iconos">
                                    <img src={arbol}/> 
                                </div>
                            </div>
                            <div className="txtLead">Number of trees saved</div>
                        </div>   
                        <div className="numUser">1</div>               
                    </div> 


                    <div className="leadDer">
                        {/* start information personal */}
                        <div className="persona">
                            <div className="fotoPer"><img src={img2}/></div>
                            <div className="inforPer">
                                <div className="element encabezado">
                                    <div className="fullName">full name</div>
                                    <div className="numTrees">nº of trees saved</div>
                                </div>
                                <div className="element informaPer">
                                    <div className="fullName">Natalia SEPÁ CASILLAS </div>
                                    <div className="numTrees">12</div>
                                </div>
                            </div>
                            <div className="numUser">2</div>
                        </div>
                        {/* End information personal */}
                        {/* start information personal */}
                        <div className="persona">
                            <div className="fotoPer"><img src={img3}/></div>
                            <div className="inforPer">
                                <div className="element encabezado">
                                    <div className="fullName">full name</div>
                                    <div className="numTrees">nº of trees saved</div>
                                </div>
                                <div className="element informaPer">
                                    <div className="fullName">Alberto GOMEZ METE</div>
                                    <div className="numTrees">5</div>
                                </div>
                            </div>
                            <div className="numUser">3</div>
                        </div>
                        {/* End information personal */}
                        {/* start information personal */}
                        <div className="persona">
                            <div className="fotoPer"><img src={img4}/></div>
                            <div className="inforPer">
                                <div className="element encabezado">
                                    <div className="fullName">full name</div>
                                    <div className="numTrees">nº of trees saved</div>
                                </div>
                                <div className="element informaPer">
                                    <div className="fullName">Roberto MARQUEZ METE</div>
                                    <div className="numTrees">5</div>
                                </div>
                            </div>
                            <div className="numUser">4</div>
                        </div>
                        {/* End information personal */}
                         {/* start information personal */}
                         <div className="persona">
                            <div className="fotoPer"><img src={img5}/></div>
                            <div className="inforPer">
                                <div className="element encabezado">
                                    <div className="fullName">full name</div>
                                    <div className="numTrees">nº of trees saved</div>
                                </div>
                                <div className="element informaPer">
                                    <div className="fullName">Manuel OBIANG METE</div>
                                    <div className="numTrees">15</div>
                                </div>
                            </div>
                            <div className="numUser">5</div>
                        </div>
                        {/* End information personal */}
                    </div> 

                </div>
            </div>
        </main>
    )
}

export default LeadeboarComponent;