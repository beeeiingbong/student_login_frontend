import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import StudentInfo from '../components/studentsInfo.component';
import { fetchAllDetails } from '../redux/actions/infoActionCreators'

const Studentinfo=( {loading, details, dispatchFetchAllDetailsAction})=> {
    useEffect(()=> dispatchFetchAllDetailsAction(), [dispatchFetchAllDetailsAction])
    return (
    <React.Fragment>
        <div className="row my-5">
            <div className="col-10">
                <h2>Student Info</h2>
            </div>
            <div className="col-2">
                { details.length> 0 ? '': <Link to="/edit-info" className="btn btn-primary">
                   Enter Your Details | <i className= "fas fa-plus"></i>                </Link>}
                
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-12">
                {
                    details.length > 0 ? <StudentInfo details={details}/> : 
                    <div className="text-center mt-5">
                        <h2><i className="far fa-folder-open fa-3x"></i></h2>
                        <h1 className="text-center">Please Enter your details here</h1>
                    </div>
                }
            </div>
        </div>
        
    </React.Fragment>
    )
}


const mapStateToProps = state => ({
    loading: state.loading,
    details:state.details,
})

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllDetailsAction: ()=> dispatch(fetchAllDetails())  
})

export default connect(mapStateToProps, mapDispatchToProps)(Studentinfo);