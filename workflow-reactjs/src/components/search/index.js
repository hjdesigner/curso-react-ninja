'use strict'

import React, { PropTypes } from 'react'
import Stylus from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className={Stylus.search}>
    <input type='search' placeholder='Digite o nome do usuario no Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
