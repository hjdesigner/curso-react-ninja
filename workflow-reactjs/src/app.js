'use strict'

import React from 'react'
import Search from './components/search/search.js'
import Css from './css/main.css'
const createReactClass = require('create-react-class')

const App = createReactClass({
  render: function () {
    return (
      <div className='container'>
        <Search />
      </div>
    )
  }
})

export default App

