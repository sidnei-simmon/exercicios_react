import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        {console.log(props)}
        { childrenWithProps(props.children, props) }
    </div>
)