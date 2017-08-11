import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="title six columns">
              <h1 className="logo">Flickr Findr</h1>
            </div>
            <div className="search six columns">
              <label for="search-flickr">Search Flickr</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Puppies . . ."
                id="search-flickr" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
