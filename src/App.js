// import Sidebar from "./Components/Sidebar/Sidebar";\
import Login from "./Components/Login/loginask.jsx";
import Concierge from "./Components/Concierge/concierge.jsx";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="Poppins">
          {/* <Footer /> */}
          {/* <Login/> */}
          {/* <User/> */}
            {/* <Sidebar /> */}
            {/* <NRI/> */}
            {/* <Advice/> */}
          <Concierge />
          {/* <Footer/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
