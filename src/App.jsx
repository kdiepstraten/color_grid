import './App.css'
import {useState} from "react";

function App() {

    const [test, setTest] = useState(false)

    const getHue = Math.floor(Math.random() * 360);
    let percentage = Math.floor(Math.random() * 100);
    const saturation = Math.floor(Math.random() * 100);


    function changeHandler(){
        setTest(!test)
    }

  return (
    <>
        <div className="container-button">
            <button className="btn-color" onClick={changeHandler}>Color</button>
        </div>
        <div className="container">
            {test &&
                <>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 50}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 45}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 40}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 35}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 30}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 25}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 20}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 15}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 10}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) - 5}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage)}%)`, boxShadow: 'inset 5px 5px 5px 5px gold'}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 5}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 10}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 15}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 20}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 25}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 30}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 35}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 40}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 45}%)`}}></div>
            <div className="box" style={{backgroundColor: `hsl(${getHue}, ${saturation}%, ${parseInt(percentage) + 50}%)`}}></div>
            </>}
        </div>
    </>
  )
}

export default App
