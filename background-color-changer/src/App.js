import './App.css';
import { useState } from "react";
function App() {

  const heading = 'Background Color Changer'
  const [bgColor,setBgColor] = useState('black');

 

  function handleSubmitBtn(e){
    e.preventDefault();
    console.log(bgColor);
    let App = document.getElementsByClassName("App")[0];
    App.style.backgroundColor = bgColor;
    console.log(App);
   
  }

  return (
    <div className="App">
      <form>
        <h1>{heading}</h1>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}/>
        <button type="submit" onClick={handleSubmitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default App;
