import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
class Dashboard extends Component{
    render(){
        const { projects } = this.props
        console.log(projects)
        return(
            <div className = 'dashbaord container'>
                <div className="row">
                    <div className="col s12 m6">
                         {/* List of Projects */}
                        <ProjectList projects = { projects }/>
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

const mapStateToProps = ( state )=>{
    return {
        projects : state.project.projects
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard)