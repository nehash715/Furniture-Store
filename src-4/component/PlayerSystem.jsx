import React, { Component } from 'react'
import Player from './Player'

export default class PlayerSystem extends Component {
    state={
        player:[
            {name:"Jack",score:21},
            {name:"Steve",score:30},
            {name:"Maratha",score:44},
            {name:"Bob",score:15},
        ]

        
    }
    handlescore=(name)=>{
        let {player}=this.state
        let pl=player.find((p)=>{
            return p.name==name
        })
        pl.score++;
        this.setState({player:player})
    }
  render() {
    let{player}=this.state
    return (
      <div className='container'>
        <Player player={player} score={this.handlescore}/>
      </div>
    )
  }
}
