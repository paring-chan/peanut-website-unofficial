import React from 'react';
import styles from './styles.module.css'

/**
 * @param text {string}
 */
const AnimatedText = ({text}) => {
    return (
        text.split('').map((c,i)=>(
            <span aria-hidden="true" key={i} style={{
                'animation-delay': (.1 + i / 10) + 's'
            }} className={styles.letter}>{c}</span>
        ))
    );
};

export default AnimatedText;