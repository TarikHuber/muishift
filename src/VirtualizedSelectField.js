import Paper from '@material-ui/core/Paper'
import React from 'react'
import SelectField from './SelectField'
import { List, AutoSizer } from 'react-virtualized'

const VirtualizedSelectField = (props) => {

  const renderMenu = ({ rootProps, downshiftProps, filteredItems }) => {
    const { height, rowHeight } = props
    const { classes, renderSuggestion } = rootProps
    const { highlightedIndex } = downshiftProps

    return <AutoSizer>{({ width }) => (
      <Paper className={classes.paper} style={{ width }} square>
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
        />
      </Paper>
    )}
    </AutoSizer>
  }


  return <SelectField renderMenu={renderMenu} {...props} />
}


VirtualizedSelectField.defaultProps = {
  height: 200,
  rowHeight: 48
}

export default VirtualizedSelectField
