import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
class Dashboard extends Component{
    render(){
        return(
            <div className = 'dashbaord container'>
                <div className="row">
                    <div className="col s12 m6">
                         {/* List of Projects */}
                        <ProjectList/>
                    </div>

                    <div className="col s12 m5 offset-m1">
                        {/* Notications */}
                        <Notifications/>
                    </div>

                    
                </div>

            </div>
        )
    }
}

export default Dashboard