import React, { Component } from 'react'
import { connect } from 'react-redux'
 class AllPlayer extends Component {
    score=(name)=>this.props.dispatch(scoreAction(name))
   
  render() {

   
   
    return (
      <div className='container'>
          {this.props.player.map((p)=>{
        return  <div className='container'>
            Name:{p.name}<br></br>
            Score:{p.score}<br></br>
            <button className='btn btn-success btn-sm' onClick={()=>this.score(p.name)}>Score</button>
        </div>
      })}
    
      </div>
    )
  }
}

const scoreAction=(name)=>({
    type:"SCORE",
    payload:{name:name}
    })
const mapStateToProps=(state)=>{
    return {
       player:state.player
    }
}
export default connect(mapStateToProps)(AllPlayer);


