
import './App.css';
// import About from './Component/About';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze the below" />
        {/*<About />*/}
      </div>

    </>
  );
}

export default App;
