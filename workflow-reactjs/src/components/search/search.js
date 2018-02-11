'use strict'
import React from 'react'
import './search.css'

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>{children}</button>
)

export default Button

