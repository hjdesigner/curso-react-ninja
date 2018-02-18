'use strict'

import React, { PropTypes } from 'react'
import pagination from 'utils/pagination'
import Page from './page'
import Stylus from './pagination.css'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <ul className={Stylus.pagination}>
    {pagination({ total, activePage }).map((page, index) => (
      <li className={`${Stylus.paginationItem} ${activePage === page ? `${Stylus.paginationActive}` : ''}`} key={index} >
        <Page page={page} ativePage={5} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </li>
    ))}
  </ul>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
