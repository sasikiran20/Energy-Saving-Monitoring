import React from "react";
import '../estilosApliances.css'

function ApliancesComp(){
    return(
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>General appliances</h1>
                <nav>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">appliances</li>
                    <li class="breadcrumb-item active">General</li>
                    </ol>
                </nav>
            </div>
            {/* End Page Title */}
            <div className="contenido">
                <div className="formApli">
                    <div className="titleForm">register your accessories</div>
                    <form>
                        <div className="campo">
                            <span>Enter Port Name</span>
                            <input type="text" placeholder="Enter Port Name" />
                        </div>
                        <div className="campo">
                            <span>Choose Appliance</span>
                            <select>
                                <option>Choose</option>
                                <option>Fan</option>
                                <option>Lights</option>
                            </select>
                        </div>
                        <div className="campo">
                            <span>Add port type</span>
                            <select>
                                <option>Choose</option>
                                <option>Port 1</option>
                                <option>Common Port</option>
                            </select>
                        </div>
                        <div className="campo">
                            <input type="submit" value="register" />
                        </div>
                    </form>
                </div>
                {/* end to formulary */}
                <div className="cards">
                    <div className="card">
                        <div className="headCard">port 1</div>
                        <div className="bodyCard">
                            <div className="tablePort">
                                <div className="headTable">
                                    <div className="code">Nº</div>
                                    <div className="namePort">Name</div>
                                    <div className="apliance">APPLIANCE</div>
                                    <div className="typePort">Type</div>
                                </div>
                                <div className="bodyTable">
                                    <div className="registro">
                                        <div className="code">1</div>
                                        <div className="namePort">Desktop</div>
                                        <div className="apliance">Fan</div>
                                        <div className="typePort">Port 1</div>
                                    </div>
                                    <div className="registro">
                                        <div className="code">2</div>
                                        <div className="namePort">Desktop</div>
                                        <div className="apliance">Fan</div>
                                        <div className="typePort">Port 1</div>
                                    </div>
                                    <div className="registro">
                                        <div className="code">3</div>
                                        <div className="namePort">Desktop</div>
                                        <div className="apliance">Fan</div>
                                        <div className="typePort">Port 1</div>
                                    </div>                                   

                                </div>

                            </div>
                            
                        </div>
                    </div>
                    {/* End port 1 */}
                    <div className="card">
                         <div className="headCard">common port</div>
                        <div className="bodyCard">
                            
                        <div className="tablePort">
                                <div className="headTable">
                                    <div className="code">Nº</div>
                                    <div className="namePort">Name</div>
                                    <div className="apliance">APPLIANCE</div>
                                    <div className="typePort">Type</div>
                                </div>
                                <div className="bodyTable">
                                    <div className="registro">
                                        <div className="code">1</div>
                                        <div className="namePort">Desktop</div>
                                        <div className="apliance">Fan</div>
                                        <div className="typePort">Port 1</div>
                                    </div>
                                    <div className="registro">
                                        <div className="code">2</div>
                                        <div className="namePort">Desktop</div>
                                        <div className="apliance">Fan</div>
                                        <div className="typePort">Port 1</div>
                                    </div>
                                    <div className="registro">
                                        <div className="code">3</div>
                                        <div className="namePort">Desktop</div>
                                        <div className="apliance">Fan</div>
                                        <div className="typePort">Port 1</div>
                                    </div>                                   

                                </div>

                            </div>

                        </div>                        
                    </div>
                    {/* End common port */}

                </div>
            </div>

        </main>
    )

}

export default ApliancesComp;