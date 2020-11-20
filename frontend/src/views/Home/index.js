import React, {Component} from 'react';
import classes from './styles.module.scss'
import AnimatedText from "../../components/AnimatedText";
import tm from './teammate.module.scss'

class Teammate extends Component {
    state = {
        active: false,
        txtActive: false
    }

    render() {
        return (
            <div>
                <div onClick={() => (this.setState({active: true, txtActive: true}))} className={`${tm.button}`}>
                    {this.props.name}
                </div>
                <div style={{
                    background: '#fff',
                }}>
                    <div className={`${tm.overlay} ${this.state.active ? tm.active : ''}`} onClick={() => {
                        this.setState({
                            txtActive: false
                        })
                        setTimeout(() => this.setState({active: false}), 500)
                    }} style={{
                        display: 'flex'
                    }}>
                        <div>
                            {
                                this.state.active && <div className={tm.container}>
                                    <h1>
                                        <AnimatedText active={this.state.txtActive} text={this.props.name}
                                                      interval={0.5} divide={20} delay={0.2}
                                                      onDeactivate={() => this.setState({active: false})}/>
                                    </h1>
                                    <AnimatedText text={this.props.desc} active={this.state.txtActive} interval={.05}
                                                  divide={50} delay={1} words/>
                                </div>
                            }
                        </div>
                        <div className={tm.img}/>
                    </div>
                </div>
            </div>
        )
    }
}

class Home extends Component {
    state = {
        members: null
    }

    async componentDidMount() {
        this.setState({
            members: await fetch(`${window.config.api}/members`).then(res=>res.json())
        })
    }

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
                    <h1 style={{
                        paddingTop: 10,
                        fontSize: 30
                    }}>팀원 소개</h1>
                    <div className={`${classes.flex__row} ${classes.sec2}`}>
                        {
                            this.state.members ? (
                                this.state.members.map((member, i) => (
                                    <Teammate name={member.name} desc={member.description} image={member.image}/>
                                ))
                            ) : '로딩중...'
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;