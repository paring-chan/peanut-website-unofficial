import React from 'react';
import styles from './animatedtext.module.css'

/**
 * @param text {string}
 * @param delay {number?}
 */
const AnimatedText = ({text, delay=0}) => {
    return (
        text.split('').map((c,i)=>(
            <span aria-hidden="true" key={i} style={{
                animationDelay: (.1 + i / 10 + delay) + 's'
            }} className={styles.letter}>{c}</span>
        ))
    );
};

export default AnimatedText;