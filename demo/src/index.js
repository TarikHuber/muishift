import MuiShift, { Autocomplete, SelectField, VirtualizedSelectField } from 'muishift'
import React, { Component } from 'react'
import bigList from './countries'
import matchSorter from 'match-sorter'
import smallList from './suggestions'
import { render } from 'react-dom'

class Demo extends Component {
  render() {
    return <div>
      <h1>muishift Demo</h1>
      <div style={{ maxWidth: 400 }}>
        <MuiShift
          items={smallList}
          itemToString={item => item ? item.label : ''}
        />
        <br />
        <Autocomplete
          items={smallList}
          itemToString={item => item ? item.label : ''}
        />
        <br />
        <SelectField
          items={smallList}
          itemToString={item => item ? item.label : ''}
        />
        <br />
        <VirtualizedSelectField
          items={bigList}
          getFilteredItems={({ items, inputValue }) => {
            return matchSorter(items, inputValue, {
              maxRanking: matchSorter.rankings.STARTS_WITH,
              keys: ['name', 'code']
            })
          }}
          itemToString={item => item ? item.name : ''}
        />
        <br />
      </div>

    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
