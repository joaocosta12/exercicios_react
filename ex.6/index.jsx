import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
import {ChildrenWithProps} from '../utils/reactUtils'

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Guilherme' />
        <Member name='Lucas' />
        <Member name='Geraldo' />
    </Family>
    , document.getElementById('app'))