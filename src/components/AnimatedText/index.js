import React from 'react';
import styles from './animatedtext.module.css'

/**
 * @param text {string}
 * @param delay {number?}
 * @param interval
 * @param divide
 * @param active
 * @param words
 */
const AnimatedText = ({text, delay=0, interval=.1, divide=10, active=true, words=false}) => {
    return (
        active ? text.split(words ? ' ' : '').map((c,i)=>(
            <span aria-hidden="true" key={i} style={{
                animationDelay: (interval + i / divide + delay) + 's',
            }} className={`${styles.letter} ${active ? styles.active : ''}`}>{c}{words && ' '}</span>
        )) : (
            <span className={styles.disabled}>
                {text}
            </span>
        )
    );
}

export default AnimatedText;