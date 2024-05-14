import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Nextpgbtn extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary" onClick={this.props.nextpg}>Next</button>
        <button type="button" class="btn btn-primary" onClick={this.props.prepg}>Previous</button>
      </div>
    )
  }
}

export default Nextpgbtn
