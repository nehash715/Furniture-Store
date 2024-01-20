import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
        <div className='nabar'>
          <div className='upper'>
            <div className='bookmyshow'>
             <img className='logoshow' src="data:image/png;base64,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"></img>
            </div>
            <div className='search'>
            <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search for Movie"/>
          </div>
            </div>

            <div className='Ncr'>NCR</div>
            <div className='english'>English</div>
          <div className='buttn'> <button className='signbtn'>Sign-up</button> </div> 
          </div>
   


        <div className='lower'>
            <ul>
                <li>Movies</li>
                <li>Events</li>
                <li>Plays</li>
                <li>Activity</li>
                <li>Fanhood</li>
            </ul>
        </div>
        </div>
      </div>
    )
  }
}
