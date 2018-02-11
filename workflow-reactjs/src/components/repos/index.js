'use strict'

import React, { PropTypes } from 'react'
import Stylus from './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={Stylus.repos}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
