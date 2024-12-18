import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Sliders from "./components/Sliders";
// import Footer from "./components/Footer";
import News from "./components/News";
import NewModal from "./components/NewModal"

function App() {
  return (
    <div classNameName="App">
      <>
        <Navbar title="PlayingWithText" aboutText="About Us" />
        <div className="container-fluid slider-bg">
        <div className="row">
          <div className="col-md-12">
          <div className="my-3">
             <Sliders />
             
           </div>
          </div>
          <div className="col-md-12">
          <div className="my-3">
          <TextForm headings="Enter the text to analyze below" />
        </div>
</div>
        </div>

        </div>

        <div className="container">
          <NewModal/>
        <News/>
        </div>
        
        
        
      </>
    </div>
  );
}

export default App;
