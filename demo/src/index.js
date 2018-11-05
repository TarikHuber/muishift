import MuiShift, { Autocomplete, SelectField, VirtualizedSelectField } from 'muishift'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import bigList from './countries'
import matchSorter from 'match-sorter'
import smallList from './suggestions'
import { render } from 'react-dom'

class Demo extends Component {
  state = { value: { label: 'Afganistan' } }

  render() {
    return (
      <div>
        <h1>muishift Demo</h1>
        <div style={{ maxWidth: 250 }}>
          <MuiShift
            items={smallList}
            itemToString={item => (item ? item.label : '')}
            inputProps={{ label: 'label', placeholder: 'placeholder', helperText: 'helperText', fullWidth: false }}
            onChange={e => {
              console.log(e)
            }}
            //input={{ value: { label: 'Afganistan' } }}
          />
          <br />
          <TextField style={{ width: 200 }} placeholder="TextField" />
          <br />
          <Autocomplete
            inputProps={{ style: { width: 200 } }}
            items={smallList}
            itemToString={item => (item ? item.label : '')}
            onChange={e => this.setState({ value: e })}
            input={{ value: this.state.value }}
          />
          <br />
          <Autocomplete
            inputProps={{ style: { width: 200 }, label: 'free autocomplete' }}
            items={smallList.map(i => i.label)}
            itemToString={item => (item ? item : '')}
          />
          <br />
          <SelectField
            items={smallList}
            itemToString={item => (item ? item.label : '')}
            inputProps={{
              label: 'label',
              placeholder: 'placeholder',
              helperText: 'helperText',
              disabled: true,
              fullWidth: false,
              style: { width: 50 }
            }}
          />
          <br />
          <SelectField
            items={smallList}
            itemToString={item => (item ? item.label : '')}
            inputProps={{
              label: 'label',
              placeholder: 'placeholder',
              helperText: 'helperText',
              disabled: false,
              style: { width: 50 }
            }}
          />
          <br />
          <VirtualizedSelectField
            inputProps={{ style: { width: 200 } }}
            items={bigList}
            //input={{ value: { code: 'af', name: 'Afghanistan' } }}
            itemToString={item => (item ? item.name : '')}
          />
          <br />
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
