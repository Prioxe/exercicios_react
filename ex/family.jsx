import React from 'react'
import {childrenWithProps} from '../ultis/reactUtils'


export default props =>(
    <div>
        <h1>Familia</h1>
        {childrenWithProps(props.childrenm, props)}
    </div>
)
