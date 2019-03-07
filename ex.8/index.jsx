import React from 'react'
import ReactDOM from 'react-dom'
import {ChildrenWithProps} from '../utils/reactUtils'
import ClassComponent from './classComponent'


ReactDOM.render(
    <ClassComponent label='Contador' initialValue={10} />
    , document.getElementById('app'))