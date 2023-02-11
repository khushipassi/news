import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import Common from "./pages/Common";
import Weather from "./components/Weather";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Weather/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Common />}/>
            <Route path="/general" element={<FetchData cat="general"/>}/>
            <Route path="/business" element={<FetchData cat="business"/>}/>
            <Route path="/entertainment" element={<FetchData cat="entertainment"/>}/>
            <Route path="/health" element={<FetchData cat="health"/>}/>
            <Route path="/science" element={<FetchData cat="science"/>}/>
            <Route path="/sports" element={<FetchData cat="sports"/>}/>
            <Route path="/technology" element={<FetchData cat="technology"/>}/>
            <Route exact path="*" element={<NotFound />}/>
          </Routes>
        </div>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
