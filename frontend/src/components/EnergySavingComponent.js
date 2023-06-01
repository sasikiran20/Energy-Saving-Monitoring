import React from "react";

function EnergiSavingComponent() {
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Energy Savings</h1>
      </div>

      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ways to save Energy</h5>

                <div
                  class="alert alert-primary alert-dismissible fade show"
                  role="alert"
                >
                  <i class="bi bi-star me-1"></i>
                  Ease up on Air Conditioner, always turn it off when not in
                  use.
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  class="alert alert-secondary alert-dismissible fade show"
                  role="alert"
                >
                  <i class="bi bi-collection me-1"></i>
                  Plant some trees, they lower air temperatures.
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <i class="bi bi-check-circle me-1"></i>
                  Turn off the computer at night and use computer saving
                  modes(up to 15 trees)
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <i class="bi bi-exclamation-octagon me-1"></i>
                  buying a high efficiency water heater(up to 45 trees)
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <i class="bi bi-exclamation-triangle me-1"></i>
                  Close your shades in summer and open them in winter
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  class="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  <i class="bi bi-info-circle me-1"></i>
                  Turn off the lights when not in use (up to 8 trees)
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EnergiSavingComponent;
