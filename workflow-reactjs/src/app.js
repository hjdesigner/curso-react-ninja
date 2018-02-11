'use strict'

import React from 'react'
import Button from './components/search/search.js'

const createReactClass = require('create-react-class')

const App = createReactClass({
  render: function () {
    return (
      <div className='container'>
        <Button>
          <span>Texto</span>
          outro texto
        </Button>
      </div>
    )
  }
})

export default App

