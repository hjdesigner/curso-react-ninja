'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with props and activePage', () => (
  <Pagination total={10} activePage={5} />
))

stories.add('with page link', () => (
  <Pagination total={3} activePage={1} pageLink='http://hjdesigner.com.br/page/%page%' />
))

stories.add('with callback', () => (
  <Pagination total={40} activePage={10} pageLink='http://hjdesigner.com.br/page/%page%' onClick={(page) => {
    window.alert(page)
  }} />
))
