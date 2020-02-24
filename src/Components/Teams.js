import React, { Component } from 'react'
export default class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {score:0}
   
        
    }
    
    increaseScore() {
        console.log(this);
        
        this.setState({
            score: this.state.score+5
        });
    }    
    conversion() {
        console.log(this);
        
        this.setState({
            score: this.state.score+2
        });
    }    
    conversion() {
        console.log(this);
        
        this.setState({
            score: this.state.score+2
        });
    }    
    foul() {
        console.log(this);
        
        this.setState({
            score: this.state.score+3
        });
    }    
    dropGoal() {
        console.log(this);
        
        this.setState({
            score: this.state.score+3
        });
    }    
    render() {
      return (

          

        
<div className="Team">
      
       <div className="teamName">
        <h2>{this.props.name}</h2>
        <h1>{this.state.score}</h1>
        </div>
        <button onClick={this.increaseScore.bind(this)}>Try</button>
        <button onClick={this.conversion.bind(this)}>Conversion</button>
        <button onClick={this.foul.bind(this)}>Penalty</button>
        <button onClick={this.dropGoal.bind(this)}>Drop Goal</button>
  </div>
      );
    }
}
