import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Hero";
import Companys from "./components/companys/Companys";
import Residences from "./components/residences/Residences";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companys />
      <Residences />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
