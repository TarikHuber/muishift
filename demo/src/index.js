import MuiShift, { Autocomplete, SelectField, VirtualizedSelectField } from 'muishift'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import bigList from './countries'
import matchSorter from 'match-sorter'
import smallList from './suggestions'
import { render } from 'react-dom'

class Demo extends Component {


    render() {

        return <div>
            <h1>muishift Demo</h1>
            <div style={{ maxWidth: 250 }}>
                <MuiShift
                    items={smallList}
                    itemToString={item => item ? item.label : ''}
                    inputProps={
                        { label: 'label', placeholder: 'placeholder', helperText: 'helperText', fullWidth: false }
                    }
                    onChange={(e) => { console.log(e) }}
                //input={{ value: { label: 'Afganistan' } }}
                />
                <br />
                <Autocomplete
                    items={smallList}
                    itemToString={item => item ? item.label : ''}
                />
                <br />
                <SelectField
                    items={smallList}
                    itemToString={item => item ? item.label : ''}
                    inputProps={
                        { label: 'label', placeholder: 'placeholder', helperText: 'helperText', disabled: true, fullWidth: false }
                    }
                />
                <br />
                <VirtualizedSelectField
                    items={bigList}
                    input={{ value: { code: 'af', name: 'Afghanistan' } }}
                    getFilteredItems={({ rootProps, downshiftProps }) => {
                        const { items } = rootProps
                        const { inputValue } = downshiftProps

                        return matchSorter(items, inputValue, {
                            maxRanking: matchSorter.rankings.STARTS_WITH,
                            keys: ['name', 'code']
                        })
                    }}
                    itemToString={item => item ? item.name : ''}
                />
                <br />
            </div>

        </div>
    }
}

render(<Demo />, document.querySelector('#demo'))
