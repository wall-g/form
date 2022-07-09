import React from 'react'
import { useState } from 'react'
import '../components/Main.css'
import Item from './Item'
function Main() {
    
    const [components, setComponents] = useState([["Name", "HSNCODE", "UNIT", "COST", "GSTRATE"]]);

    function addComponent() {
        setComponents([...components, ["Name", "HSNCODE", "UNIT", "COST", "GSTRATE"]]);
    }

    return (
        <>
            <div className='main-form'>
                <h2>Rare Concepts</h2>
                <h3>Details Form</h3>
                <label for="bill">Bill To</label>
                <input type="text" id="bill"></input>
                <label for="ship">Ship To</label>
                <input type="text" id="ship"></input>
                <label for="supply">Supply Place</label>
                <input type="text" id="supply"></input>
                <label for="pan">Pan</label>
                <input type="text" id="pan" ></input>
                <label for="gst">GSTIN No.</label>
                <input type="text" id="gst"></input>
                <button onClick={addComponent} className='button'>Add Item</button>
                {components.map((item, i) => ( <Item text={item} /> ))} 
            </div>
        </>
    )
}

export default Main