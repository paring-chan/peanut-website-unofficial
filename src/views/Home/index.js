import React, {Component} from 'react';
import classes from './styles.module.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <section className={classes.hero}>
                    홈
                </section>
            </div>
        );
    }
}

export default Home;