import MuiShift from './MuiShift'
import React from 'react'
import TextField from '@material-ui/core/TextField'

const renderInput = ({ rootProps, downshiftProps }) => {
  const { getInputProps, inputValue, selectedItem, input, selectItem } = downshiftProps
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

            let label = e.target.value

            if (selectedItem) {
              if (selectedItem.label === label) {
                return
              }
            }

            selectItem(e.target.value)
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
