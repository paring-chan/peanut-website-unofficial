import React, {Component} from 'react';
import classes from './styles.module.scss'
import AnimatedText from "../../components/AnimatedText";

class Home extends Component {
    render() {
        return (
            <div>
                <section className={classes.hero}>
                    <h1 style={{fontSize: '3rem'}}>
                        <AnimatedText text="Team Peanut"/>
                    </h1>
                    <h1 style={{fontSize: '3rem'}}>
                        <AnimatedText text="뭔가 하는 팀" delay={1}/>
                    </h1>
                </section>
            </div>
        );
    }
}

export default Home;