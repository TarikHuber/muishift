# muishift

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Thin Material UI layer over downshift. [Demo](https://tarikhuber.github.io/muishift/)


### Props
Property | Type | Required | Description
-------- | ---- | -------- | -----------
`items` | Array | ✓ | Items that will be shown in menu
`temToString` | Function |  | Functions to get string value of item
`renderInput ` | Function |  | Functions to render Input 
`renderSuggestion ` | Function |  | Functions to render single Suggestion
`getFilteredItems ` | Function |  | Functions to get filtered items
`renderMenu ` | Function |  | Functions to render Menu 
`matchSorterProps ` | Object |  | Properties for the matchSorter
`inputProps ` | Object |  | inputProps that will be spread into the TextField of the default Input 
all `downshift` props |  |  | all props that can be send to `downshift`


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
