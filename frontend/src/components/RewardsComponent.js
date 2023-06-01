import React from "react";
import '../rewards.css';
import img1 from '../assets/img/2.webp';
import img2 from '../assets/img/arbol1.jpg';
import img3 from '../assets/img/1.png';

function RewardsComponent(){
    return(
        <main id="main" className="main">

            <div className="pagetitle">
            <h1>Rewards</h1>
            </div>
            {/* End Page Title */}

            <section className="section">
            <div className="contenedor" >

                <div className="col-lg-6 contenedorTarjeta">

                    <div className="card">
                        <div className="cabecera"> cupon 1 </div>
                        <div className="imgCard">
                            <img src={img1}/>
                        </div>
                        <div className="txtCard">
                            <div className="titulo">You saved 0.97kwh</div>
                            <div className="subtitulo">you have won a prize</div>
                        </div>
                        <div className="btnCard">
                            <a>find out</a>
                        </div>
                    </div>

                    {/* End Default Rewards */}
                     <div className="card">
                        <div className="cabecera"> cupon 2 </div>
                        <div className="imgCard">
                            <img src={img2}/>
                        </div>
                        <div className="txtCard">
                            <div className="titulo">You saved 12 trees</div>
                            <div className="subtitulo">you have won a prize</div>
                        </div>
                        <div className="btnCard">
                            <a>find out</a>
                        </div>
                    </div>
                    {/* End Default Rewards */}

                    <div className="card">
                        <div className="cabecera"> cupon 3 </div>
                        <div className="imgCard">
                            <img src={img3}/>
                        </div>
                        <div className="txtCard">
                            <div className="titulo">You earned 12 points</div>
                            <div className="subtitulo">you have won a prize</div>
                        </div>
                        <div className="btnCard">
                            <a>find out</a>
                        </div>
                    </div>
                    {/* End Default Rewards */}

                </div>

                <div className="col-lg-6">              

                </div>

            </div>
            </section>

        </main>
    )
}

export default RewardsComponent;
