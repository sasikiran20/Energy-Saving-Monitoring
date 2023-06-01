import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css'

// import  './assets/vendor/apexcharts/apexcharts.min.js';
import  './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import  './assets/vendor/quill/quill.min.js';
// import  './assets/vendor/chart.js/chart.min.js';
// import  './assets/vendor/echarts/echarts.min.js';
// import  './assets/vendor/simple-datatables/simple-datatables.js';
// import  './assets/vendor/tinymce/tinymce.min.js';
// import  './assets/vendor/php-email-form/validate.js';





import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import Dashboard from './Dashboard';
import Charts from "./Charts";
// import PorfilePage from './ProfilePage'
// import EnergySavin from './EnergySaving';
 import Rewards from './Rewards';

function App() {
  return (
    <div className="App">
      {/*<Dashboard></Dashboard>      */}
        <Charts></Charts>
    </div>
  );
}

export default App;
