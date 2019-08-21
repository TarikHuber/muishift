import FormFreeAutocomplete from './FormFreeAutocomplete'
import MuiShift, { Autocomplete, SelectField, VirtualizedSelectField, FreeAutocomplete } from 'muishift'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import bigList from './countries'
import matchSorter from 'match-sorter'
import smallList from './suggestions'
import store from './store'
import { Field, reduxForm } from 'redux-form'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name={`email`}
            input={{ value: 'test' }}
            component={FormFreeAutocomplete}
            items={smallList.map(i => i.label)}
            itemToString={item => (item ? item : '')}
          />
        </div>
      </div>
    </form>
  )
}

const Form = reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)

class Demo extends Component {
  state = { value: 'test' }

  render() {
    return (
      <Provider store={store}>
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
            />
            <br />
            <FreeAutocomplete
              input={{ value: 'test' }}
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
                style: { width: 200 }
              }}
            />
            <br />
            <SelectField
              inputProps={{ style: { width: 200 } }}
              items={bigList}
              input={{ value: { code: 'af', name: 'Afghanistan' } }}
              itemToString={item => (item ? item.name : '')}
            />
            <br />
            <VirtualizedSelectField
              inputProps={{ style: { width: 200 } }}
              items={bigList}
              input={{ value: { code: 'af', name: 'Afghanistan' } }}
              itemToString={item => (item ? item.name : '')}
              onChange={e => console.log(e)}
            />
            <br />
          </div>

          <Form />
        </div>
      </Provider>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
