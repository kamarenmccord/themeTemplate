import React from 'react';
import './SubComponet.css';

// next theme componet

const SubComponet = ({ style, titleSet, styleIndex=0 }) => {

    styleIndex++;
    if (styleIndex > 2){
        styleIndex = 0
    }

    return (
        <div className='subcomponet'>
            <div className={style? style[styleIndex]+ " themebox" : 'extraLight-theme themebox'}>
                {titleSet? titleSet[styleIndex] : 'Next Theme'}
            </div>
        </div>
    )
}

export default SubComponet
