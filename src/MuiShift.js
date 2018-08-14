import Downshift from 'downshift'
import React from 'react'
import matchSorter from 'match-sorter'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import zIndex from '@material-ui/core/styles/zIndex'

const _itemToString = item => (item || '')

const _getSelectedItem = (input) => { return input ? input.value : '' }

const _renderInput = ({ rootProps, downshiftProps }) => {
  const { getInputProps } = downshiftProps
  const { inputProps } = rootProps

  return (
    <TextField
      InputProps={{ ...getInputProps() }}
      {...inputProps}
    />
  )
}

const _matchSorterProps = {
  maxRanking: matchSorter.rankings.STARTS_WITH
}


const _renderSuggestion = ({ rootProps, downshiftProps, suggestion, index }) => {
  const { itemToString } = rootProps
  const { highlightedIndex, getItemProps, selectedItem } = downshiftProps
  const itemProps = getItemProps({ item: suggestion })
  const isHighlighted = highlightedIndex === index
  const itemString = itemToString(suggestion) || ''
  const isSelected = suggestion === selectedItem

  return (
    <MenuItem
      {...itemProps}
      key={index}
      selected={isHighlighted}
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {itemString}
    </MenuItem>
  )
}

const _getKeys = (obj, prefix) => {
  let keys = []

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      keys = keys.concat(_getKeys(obj[key], prefix != null ? `${prefix}.${key}` : key))
    }
    keys.push(prefix != null ? `${prefix}.${key}` : key)
  })

  return keys
}

const _getFilteredItems = ({ rootProps, downshiftProps }) => {
  const { items, itemToString, matchSorterProps } = rootProps
  const { selectedItem, inputValue } = downshiftProps
  const isTyping = itemToString(selectedItem) !== inputValue
  let keys = []

  //gets keys recusively
  if (items.length) {
    keys = _getKeys(items[0])
  }

  return !isTyping ? items : matchSorter(items, inputValue, {
    keys,
    ...matchSorterProps
  })
}

const _renderMenu = ({ rootProps, downshiftProps, filteredItems }) => {
  const { classes, renderSuggestion } = rootProps

  return <Paper className={classes.paper} square>
    {filteredItems.map((suggestion, index) =>
      renderSuggestion({
        rootProps,
        downshiftProps,
        suggestion,
        index
      })
    )}
  </Paper>
}

export const MuiShift = (rootProps) => {
  const { input, classes, getFilteredItems, renderInput, renderMenu, itemToString } = rootProps

  return (
    <Downshift
      {...input}
      itemToString={itemToString}
      selectedItem={input ? input.value : undefined}
      {...rootProps}
    >
      {downshiftProps => {
        const { isOpen } = downshiftProps
        const filteredItems = getFilteredItems({ rootProps, downshiftProps })

        return (
          <div className={classes.container}>
            {renderInput({ rootProps, downshiftProps })}
            {isOpen && !!filteredItems.length && renderMenu({ rootProps, downshiftProps, filteredItems })}
          </div>
        )
      }}
    </Downshift>
  )
}

const styles = theme => ({

  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    zIndex: zIndex.modal
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  closeButton: {
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
})

MuiShift.defaultProps = {
  getSelectedItem: _getSelectedItem,
  getFilteredItems: _getFilteredItems,
  renderSuggestion: _renderSuggestion,
  renderInput: _renderInput,
  itemToString: _itemToString,
  renderMenu: _renderMenu,
  matchSorterProps: _matchSorterProps
}

export default withStyles(styles)(MuiShift)
