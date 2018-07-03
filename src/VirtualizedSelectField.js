import React from 'react'
import SelectField from './SelectField'
import { List, AutoSizer } from 'react-virtualized'

const renderMenu = ({ rootProps, downshiftProps, filteredItems }) => {
  const { renderSuggestion } = rootProps
  const { highlightedIndex } = downshiftProps

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
          style={{ ...style }}
        >
          {renderSuggestion({
            rootProps,
            downshiftProps,
            suggestion: filteredItems[index],
            index
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
