import React from "react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Comparison",
    },
  },
};

const labels = [
  "0:00",
  "0:15",
  "0:30",
  "0:45",
  "1:00",
  "1:15",
  "1:30",
  "1:45",
  "2:00",
  "2:15",
  "2:30",
  "2:45",
  "3:00",
  "3:15",
  "3:30",
  "3:45",
  "4:00",
  "4:15",
  "4:30",
  "4:45",
  "5:00",
  "5:15",
  "5:30",
  "5:45",
  "6:00",
  "6:15",
  "6:30",
  "6:45",
  "7:00",
  "7:15",
  "7:30",
  "7:45",
  "8:00",
  "8:15",
  "8:30",
  "8:45",
  "9:00",
  "9:15",
  "9:30",
  "9:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
  "23:15",
  "23:30",
  "23:45",
];

function Dashboard() {
  let [data, setData] = useState(null);
  let [data1, setData1] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/test").then((res) => {
      setData(res.data);
    });

    axios.get("http://127.0.0.1:8000/api/test1").then((res) => {
      setData1(res.data);
    });
  }, []);

  if (data === null || data1 === null) {
    return <div>Loading.....</div>;
  }

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
      </div>
      <section class="section dashboard">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Energy Consumed<span> | Today</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i
                          className="bi bi-power"
                          style={{ "font-size": 48, color: "green" }}
                        ></i>
                      </div>

                      <div class="ps-3">
                        <h6>
                          {Object.values(data.data)
                            .reverse()[0]
                            .total_usage.toFixed(2)}{" "}
                          kWh
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Energy saved <span>| Today </span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i
                          class="bi bi-power"
                          style={{
                            color:
                              Object.values(data.data).reverse()[1]
                                .total_usage <
                              Object.values(data.data).reverse()[0].total_usage
                                ? "red"
                                : "green",
                          }}
                        ></i>
                      </div>
                      <div class="ps-3">
                        <h6>
                          {(
                            Object.values(data.data).reverse()[1].total_usage -
                            Object.values(data.data).reverse()[0].total_usage
                          ).toFixed(2)}
                          kWh
                        </h6>
                        <div>
                          <span className="text-success small pt-1 fw-bold">
                            {(
                              Math.abs(
                                (Object.values(data.data).reverse()[1]
                                  .total_usage -
                                  Object.values(data.data).reverse()[0]
                                    .total_usage) *
                                  100
                              ) /
                              Object.values(data.data).reverse()[1].total_usage
                            ).toFixed(1)}
                            %
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            {Object.values(data.data).reverse()[1].total_usage <
                            Object.values(data.data).reverse()[0].total_usage
                              ? "decrease"
                              : "increase"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Reports <span>/Per day in kWh</span>
                    </h5>

                    <div id="reportsChart">
                      {" "}
                      <Line
                        options={options}
                        data={{
                          labels,
                          datasets: data.data,
                        }}
                      />
                      <div>
                        Average energy consumed: {data.average.toFixed(3)}kWh
                      </div>
                      <br />
                      <div>
                        Peak hours:
                        {data.peaks
                          .map((peak) => labels[peak].toString())
                          .join(", ")}
                      </div>
                    </div>

                    <div id="reportsChart">
                      <br /> <br />
                      <br />
                      <h5 style={{ textAlign: "center" }}>
                        Real Data in watts
                      </h5>
                      <Line
                        options={options}
                        data={{
                          labels: data1.labels,
                          datasets: data1.data,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body pb-0">
                <h5 class="card-title">Trees Saved</h5>
                You have saved <strong>{data.total_trees.toFixed(2)}</strong>
                <img
                  height={50}
                  width={50}
                  src={"/tree.png"}
                  style={{ marginBottom: 8, marginLeft: 4 }}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Recent Activity <span></span>
                </h5>

                <div className="activity">
                  <div className="activity-item d-flex">
                    <div className="activite-label">32 min ago</div>
                    <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                    <div className="activity-content">Log in</div>
                  </div>

                  <div className="activity-item d-flex">
                    <div className="activite-label">33 min ago</div>
                    <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                    <div className="activity-content">lights switched on</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Dashboard;
