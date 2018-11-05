import React from 'react'
import MuiShift from './MuiShift'
import TextField from '@material-ui/core/TextField'

const renderInput = ({ rootProps, downshiftProps }) => {
  const { getInputProps, inputValue, selectedItem, input } = downshiftProps
  const { inputProps } = rootProps

  return (
    <TextField
      {...inputProps}
      InputProps={{
        ...getInputProps({
          onBlur: e => {
            e.preventDefault()
            if (input) {
              input.onBlur(e)
            }
          }
        })
      }}
    />
  )
}

const FreeAutocomplete = props => {
  const { input } = props

  return (
    <MuiShift
      {...props}
      renderInput={renderInput}
      onStateChange={({ inputValue }) => {
        return input && input.onChange ? input.onChange(inputValue) : undefined
      }}
    />
  )
}

export default FreeAutocomplete
