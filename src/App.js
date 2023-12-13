import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import TermsAndConditions from './screens/TermsAndConditions'; // Import the TermsAndConditions component
import PrivacyPolicy from './screens/PrivacyPolicy'; // Import the PrivacyPolicy component
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/createuser" element={<Signup/>}/>
        <Route exact path="/terms" element={<TermsAndConditions/>}/>
        <Route exact path="/privacy" element={<PrivacyPolicy/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
