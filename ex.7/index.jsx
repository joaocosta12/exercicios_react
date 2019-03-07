import React from 'react'
import ReactDOM from 'react-dom'
import {ChildrenWithProps} from '../utils/reactUtils'
import ClassComponent from './classComponent'


ReactDOM.render(
    <ClassComponent value='Componente Classe' />
    , document.getElementById('app'))