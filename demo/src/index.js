import MuiShift from 'muishift'
import React, { Component } from 'react'
import countries from './countries'
import { render } from 'react-dom'

class Demo extends Component {
  render() {
    return <div>
      <h1>muishift Demo</h1>
      <MuiShift
        items={countries}
        itemToString={item => item ? item.name : ''}
      />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
