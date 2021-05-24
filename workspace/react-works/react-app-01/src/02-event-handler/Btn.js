
import React from 'react'

const Btn = ({ caption, handler }) => (
    <button className="btn btn-primary" onClick={handler}> {caption} </button>
)

export default Btn; 