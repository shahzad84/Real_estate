import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  render() {
    return (
      <div>
        this is new
        <Newsitems title="My title" description="descriotuib"/>
      </div>
    )
  }
}

export default News
