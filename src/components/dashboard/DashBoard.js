import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from "react-redux-firebase";


class DashBoard extends Component {
    render() {
        const { projects } = this.props;
        return (
          <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <ProjectList projects={projects} />
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifications />
              </div>
            </div>
          </div>
        );
    }
}
    const mapStateToProps = (state) =>{            
        return {
            projects : state.firestore.ordered.projects
        }
    }
export default compose(
  firestoreConnect(() => ["projects"]),
  connect(mapStateToProps)
)(DashBoard);