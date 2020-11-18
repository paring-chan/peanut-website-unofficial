import React from 'react';
import styles from './styles.module.css'

/**
 * @param text {string}
 * @param delay {number?}
 */
const AnimatedText = ({text, delay=0}) => {
    return (
        text.split('').map((c,i)=>(
            <span aria-hidden="true" key={i} style={{
                'animation-delay': (.1 + i / 10 + delay) + 's'
            }} className={styles.letter}>{c}</span>
        ))
    );
};

export default AnimatedText;