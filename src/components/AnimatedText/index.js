import React from 'react';
import styles from './animatedtext.module.css'

/**
 * @param text {string}
 * @param delay {number?}
 * @param interval
 * @param divide
 * @param active
 */
const AnimatedText = ({text, delay=0, interval=.1, divide=10, active=true}) => {
    return (
        text.split('').map((c,i)=>(
            <span aria-hidden="true" key={i} style={{
                animationDelay: (interval + i / divide + delay) + 's'
            }} className={`${styles.letter} ${active ? styles.active : styles.inactive}`}>{c}</span>
        ))
    );
}

export default AnimatedText;