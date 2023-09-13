import React, { Component } from 'react';

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            expression: "expression",
        }
        this.answer = this.answer.bind(this);
    }

    answer() {
        this.setState({ expression: "" }, () => {
            if(Math.random() > 0.5) {
                if(Math.random() > 0.5) {
                    this.setState({ result: 'yes' });
                    alert("Yes");
                } else {
                    this.setState({ result: 'again' });
                    alert("Try asking again");
                }
            } else {
                if(Math.random() > 0.5) {
                    this.setState({ result: 'no' });
                    alert("No");
                } else {
                    this.setState({ result: 'maybe' });
                    alert("Maybe");
                }
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='ball'>
                    <div className='eight'>
                        <h1>8</h1>
                    </div>
                </div>
                <div id='ball' className={this.state.result}></div>
                <h1>Type your question and press the button to receive an answer</h1>
                <input type='text' id='question'></input> <button onClick={this.answer}>Ask the question</button>
            </div>
        )
    }
}



export default Ball;