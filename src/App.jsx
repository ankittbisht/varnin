import "./App.css";
import Navbar from "./Components/Navbar";
import TwoColumnComponent from "./Components/TwoColumnComponent";
import Aboutus from "./Components/Aboutus";
import CardComponent from "./Components/Cardcomponent";
import Choosesection from "./Components/Choosesection";
import MyComponent from "./Components/Contactus";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
