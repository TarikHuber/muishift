import React from 'react'
import SelectField from './SelectField'
import { List, AutoSizer } from 'react-virtualized'


const VirtualizedSelectField = (props) => {

  const renderMenu = ({ rootProps, downshiftProps, filteredItems }) => {
    const { height, rowHeight } = props
    const { renderSuggestion } = rootProps
    const { highlightedIndex } = downshiftProps

    return <AutoSizer>{({ width }) => (
      <List
        width={width}
        scrollToIndex={highlightedIndex || 0}
        height={height}
        rowCount={filteredItems.length}
        rowHeight={rowHeight}
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


  return <SelectField renderMenu={renderMenu} {...props} />
}


VirtualizedSelectField.defaultProps = {
  height: 200,
  rowHeight: 48
}

export default VirtualizedSelectField
