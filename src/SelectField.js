import React from 'react'
import MuiShift from './MuiShift'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import Close from '@material-ui/icons/Close'

const renderInput = (props) => {
  const { InputProps, inputProps, classes, ref, isOpen, selectedItem, openMenu, closeMenu, clearSelection, ...other } = props

  const isDisabled = inputProps ? inputProps.disabled : undefined

  return (
    <TextField
      InputProps={{
        inputRef: ref,
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
      {...other}
    />
  )
}

const SelectField = (props) => {
  return <MuiShift renderInput={renderInput} {...props} />
}

export default SelectField
