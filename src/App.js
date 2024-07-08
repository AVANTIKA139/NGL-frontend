import { ToastContainer } from "react-toastify";
import SeeMessages from "./Components/SeeMessages";
import SendMessage from "./Components/SendMessage";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" Component={SendMessage} />
          <Route path="/xL3iX88dT0LBo6ody95qU" Component={SeeMessages} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
