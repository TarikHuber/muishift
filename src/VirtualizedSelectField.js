import React from 'react'
import SelectField from './SelectField'
import { List, AutoSizer } from 'react-virtualized'

const renderMenu = ({ classes, filteredItems, renderSuggestion, getItemProps, highlightedIndex, selectedItem, itemToString }) => {
  return <AutoSizer>{({ width }) => (
    <List
      width={width}
      scrollToIndex={highlightedIndex || 0}
      height={200}
      rowCount={filteredItems.length}
      rowHeight={48}
      rowRenderer={
        ({ key, index, style }) => <div
          key={key}
          component='div'
          style={{ ...style }}
        >
          {renderSuggestion({
            suggestion: filteredItems[index],
            index,
            itemProps: getItemProps({ item: filteredItems[index] }),
            highlightedIndex,
            selectedItem,
            itemToString
          })}
        </div>
      }

    />)}
  </AutoSizer>
}

const VirtualizedSelectField = (props) => {
  return <SelectField renderMenu={renderMenu} {...props} />
}

export default VirtualizedSelectField
