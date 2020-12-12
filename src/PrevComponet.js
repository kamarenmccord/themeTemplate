import React from 'react';
import './PrevComponet.css';

const PrevComponet = ({ style, titleSet, styleIndex }) => {

    styleIndex--;
    if (styleIndex < 0){
        styleIndex = 2
    }

    return (
        <div className='prevcomponet'>
            <div className={style? style[styleIndex]+ " themebox" : 'extraLight-theme themebox'}>
                {titleSet? titleSet[styleIndex] : 'Previous Theme'}
            </div>
        </div>
    )
}

export default PrevComponet
