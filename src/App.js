// import Sidebar from "./Components/Sidebar/Sidebar";\
// import Login from "./Components/Login/loginask.jsx";
// import Sidebar from './Components/Navbar/Sidebar'
import Cor from './Components/NRI/corousal/corsoual.jsx'
import Que from './Components/NRI/questoin/question.jsx'
// import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="Poppins">
          {/* <Footer /> */}
          {/* <Login/> */}
          <Que/>
          {/* <Sidebar /> */}
          <Cor/>
        </div>
      </Router>
    </>
  );
}

export default App;
