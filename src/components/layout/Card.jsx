import React from 'react'

import './Card.css'

export default props =>
    <div className="Card">
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer">
            {props.footer}
        </div>
    </div>