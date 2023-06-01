import React from "react";

function PointsComponen(){
    return(
        <main id="main" class="main">

        <div class="pagetitle">
        <h1>Points</h1>
        <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">history</li>
            <li class="breadcrumb-item active">Points</li>
            </ol>
        </nav>
        </div>
        {/* End Page Title */}

        <section class="section">
        <div class="row align-items-top">
            <div class="col-lg-6">

            
            

            {/* Card with an image on left */}
            <div class="card mb-3">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="assets/img/swaraj.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Today's earned points</h5>
                    <p class="card-text">........</p>
                    </div>
                </div>
                </div>
            </div>
            {/* End Card with an image on left */}

            </div>

            <div class="col-lg-3">

            {/* Card with an image on top */}
            <div class="card">
                <img src="assets/img/bulb.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Weekly Points Earned</h5>
                <p class="card-text">You have earned 120 points that contributes to your <b>Rewards</b></p>
                </div>
            </div>
            {/* End Card with an image on top */}

            

            </div>

            <div class="col-lg-3">

            
            
            

            </div>

        </div>
        </section>

  </main>
    )

}

export default PointsComponen;