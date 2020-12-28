import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, Slide } from 'react-toastify'

import authpage from './pages/authpage';
import editstudentInfo from './pages/editstudentInfo';
import studentInfo from './pages/studentinfo';
import Header from './components/header.component'
import Spinner from './components/spinner/spinner.component';
import { logoutUser } from './redux/actions/authActionCreators'

const App = ({ user, dispatchLogoutAction })=> {
  return (
    <React.Fragment>
      <ToastContainer position ="top-right" autoClose={2000}
       hideProgressBar transition= {Slide}/>
      <Spinner/>
      <Header isLoggedIn = {user.isLoggedIn} userName={user.fullName}
              onLogout={dispatchLogoutAction}/>
    <div className = "container my-5">
      {!user.isLoggedIn ? 
      (<BrowserRouter>
      <Switch>
        <Route exact path="/auth" component={authpage}/>
        <Redirect to="/auth"/>
      </Switch></BrowserRouter>):
      (<BrowserRouter>
      <Switch>
        <Route exact path="/info" component={studentInfo}/>
        <Route exact path="/edit-info" component={editstudentInfo}/>
        <Route exact path="/edit-info/:infoId" component={editstudentInfo}/>
        <Redirect to="/info"/>
      </Switch>
      </BrowserRouter> )  
      }
    </div>
    </React.Fragment>
      )
}

const mapStateToProps = (state)=> ({ user: state.user })
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: ()=> dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)