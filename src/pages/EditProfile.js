import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import ProfileActions from '../actions/profile';
import { makeStyles } from "@material-ui/core/styles";
import LoadingSpinner from '../components/LoadingSpinner';
import QAComp from '../components/QAComp';
import { equals, isEmpty, isNil } from 'ramda'

const useStyle = makeStyles(theme => ({
  editProfile: {
      flexGrow: 1,
      width: "600px",
      margin: "auto"
  },
  title: {
      margin: "auto",
      width: "600px",
      fontSize: '30px',
      fontWeight: 800,
      fontFamily: "'Roboto', 'sans-serif'",
      color: '#1aae9f',
      padding: '15px 0px 15px 0px',
  },
  qacomp: {
      border: "3px solid #1aae9f",
      width: "600px",
      height: "700px",
      margin: "auto",
      position: "relative",
      padding: "25px 55px 25px 25px"
  }
}));
function EditProfile({
  editProfileRequest,
  editProfileData,
  isDone,
  history
}) {
  const classes = useStyle();
  useEffect(()=> {
      const payload = history.location.state.actions.edit;
      editProfileRequest(payload);
  }, []);
  
  return (
      <div className={classes.editProfile}>
          <div>
              <div className={classes.title}>
                  <span>
                      Edit Profile
                  </span>
              </div>
              <div className={classes.qacomp}>
              {!isDone ? (
                  <LoadingSpinner />
              ) : (
                  <QAComp questions={editProfileData.response} />
              )}
              </div>
          </div>
      </div>
  )
}

const mapStateToProps = state => ({
  editProfileData: state.profile.data,
  isDone: equals(state.profile.status, 'done')
})

const mapDispatchToProps = dispatch => ({
  editProfileRequest: payload =>  dispatch(ProfileActions.editProfileRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile));