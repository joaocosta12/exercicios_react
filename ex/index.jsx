import React from 'react'
import ReactDOM from 'react-dom'
import {ChildrenWithProps} from '../utils/reactUtils'
import Field from './field'


ReactDOM.render(
    <Field initialValue='Teste' />
    , document.getElementById('app'))