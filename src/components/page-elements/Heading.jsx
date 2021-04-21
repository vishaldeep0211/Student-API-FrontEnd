import React from 'react'
import { v4 as uuidv4 } from "uuid";

export default function Heading({headingType, headingText}) {
    return (
        <div key={uuidv4()}>
        {headingType === "h1" ? 
            <h1 key={uuidv4()} className="heading">{headingText}</h1> : <h6 className="heading">{headingText}</h6>}
        </div>
    )
}
