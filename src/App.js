import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from "react-bootstrap";
import Register from './Register';
import Login from './Login';
function App() {
  return (
    <div className="form-section">
      <div className="container">
          <div className="col-lg-6 mx-auto wrapper-form">
          <Tabs defaultActiveKey="register" id="controlled-tab-example">
            <Tab eventKey="register" title="Register">
              <Register />
            </Tab>
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
