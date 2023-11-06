// eslint-disable-next-line no-unused-vars
import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Cursor() {

    return (
        <AnimatedCursor 
            innerSize={8}
            outerSize={25}
            color='23, 28, 143'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            
            '.link'
            ]}

        />
    );
}

export default Cursor;