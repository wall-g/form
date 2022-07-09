import React from 'react'

const Item = (props) => {
  return (
    <div className='lower-form'>
        <label for="supply">{props.text[0]}</label>
        <input type="text" id="supply"></input>
        <label for="pan">{props.text[1]}</label>
        <input type="text" id="pan" ></input>
        <label for="gst">{props.text[2]}</label>
        <input type="text" id="gst"></input>
        <label for="gst">{props.text[3]}</label>
        <input type="text" id="gst"></input>
        <label for="gst">{props.text[4]}</label>
        <input type="text" id="gst"></input>
    </div>
  )
}

export default Item