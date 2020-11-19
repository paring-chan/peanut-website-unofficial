import React, {Component} from 'react';
import classes from './styles.module.scss'
import AnimatedText from "../../components/AnimatedText";

class Home extends Component {
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <section className={classes.hero}>
                    <h1 style={{fontSize: '3rem'}}>
                        <AnimatedText text="Team Peanut"/>
                    </h1>
                    <h1 style={{fontSize: '3rem'}}>
                        <AnimatedText text="뭔가 하는 팀" delay={1}/>
                    </h1>
                </section>
                <section className={`${classes.flex__col} ${classes.minFullHeight}`}>
                    <h1>팀원 소개</h1>
                    <div className={`${classes.flex__row} ${classes.sec2}`} style={{
                        width: '100vw'
                    }}>
                        <div className={classes.teammate}>1</div>
                        <div className={classes.teammate}>2</div>
                        <div className={classes.teammate}>3</div>
                        <div className={classes.teammate}>4</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;