import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 80,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else  {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 60 
                    }))
                }
            } 
        }, 10)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="timeBoard">
            { minutes === 40 && seconds === 0
            
                    ? <h2>Half time!</h2>
                    : <h1>Time Remaining of  match : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>

                    
                }
            { minutes === 0 && seconds === 0
                    ? <h1>
                    Game Finished!</h1>
                    : <h1></h1>
                }
            </div>
        )
    }
}