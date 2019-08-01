import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import Close from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import MuiShift from './MuiShift'
import React from 'react'
import TextField from '@material-ui/core/TextField'

const renderInput = (props) => {
  const { downshiftProps, rootProps } = props
  const { getInputProps, isOpen, selectedItem, openMenu, closeMenu, clearSelection } = downshiftProps
  const { inputProps, classes } = rootProps
  const isDisabled = inputProps ? inputProps.disabled : undefined
  const InputProps = getInputProps()

  return (
    <TextField
      InputProps={{
        onFocus: selectedItem ? undefined : openMenu,
        classes: {
          root: classes.inputRoot
        },
        endAdornment: <InputAdornment position='end'>
          {!!selectedItem && <IconButton
            disabled={isDisabled}
            className={classes.closeButton}
            style={{ width: 16 }}
            onClick={clearSelection}
            tabIndex={-1} >
            <Close style={{ fontSize: 16 }} />
          </IconButton>
          }

          <IconButton disabled={isDisabled} style={{ width: 24 }} onClick={isOpen ? closeMenu : openMenu} tabIndex={-1}>
            {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
          </IconButton>
        </InputAdornment>,
        ...InputProps
      }}
      {...inputProps}
    />
  )
}

const SelectField = (props) => {
  return <MuiShift renderInput={renderInput} {...props} />
}

export default SelectField
