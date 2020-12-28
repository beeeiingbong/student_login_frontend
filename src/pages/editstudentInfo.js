import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'

import { createDetails, getDetailsById,updateDetailsById } from '../redux/actions/infoActionCreators'

const EditstudentInfo=({ match, history, dispatchCreateInfoAction, dispatchGetDetailsByIdAction,dispatchUpdateDetailsAction})=> {
    
    const[rollNumber, setRollNumber]=useState(0)
    const[address, setAddress]=useState('')
    const[dateOfBirth, setDateOfBirth]=useState('')
    const[schoolName, setSchoolName]=useState('')
    const[schoolAddress, setSchoolAddress]=useState('')
    const [error, setError] = useState({ rollNumber: false, address: false, dateOfBirth: false, schoolName: false, schoolAddress: false });

    useEffect(()=>{
        const {detailsId} = match.params;
        if(detailsId){
            dispatchGetDetailsByIdAction(detailsId, 
                ({rollNumber,
                  address,
                  dateOfBirth,
                  schoolName,
                  schoolAddress   })=>{
                      setRollNumber(rollNumber);
                      setAddress(address);
                      setDateOfBirth(dateOfBirth);
                      setSchoolName(schoolName);
                      setSchoolAddress(schoolAddress);            
                        })
        }
    },[dispatchGetDetailsByIdAction, match.params])

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (isFormInvalid()) updateErrorFlags();
        else{
        const { detailsId } = match.params;
        const data = {rollNumber, address, dateOfBirth,schoolName, schoolAddress}
            if(detailsId){
                dispatchUpdateDetailsAction(detailsId, data,() =>{
                        toast.success('Details Updated Successfully')
                        history.replace('/info')
                }, (message)=> toast.error(`Error:${message} `) )
            }
            else{
                dispatchCreateInfoAction(data, ()=> {
                    toast.success('Details created Successfully!');
                    history.replace('/info');
                    },(message)=> toast.error(`Error: ${message}`))
            }
        } 
        
    }

    const isFormInvalid = () => (!rollNumber || !address.trim() || !dateOfBirth.trim() || !schoolName.trim() || !schoolAddress.trim() );

    const updateErrorFlags = () => {
        const errObj = { rollNumber: false, address: false, dateOfBirth: false, schoolName: false, schoolAddress:false };
        if (!rollNumber) errObj.rollNumber = true;
        if (!address.trim()) errObj.address = true;
        if (!dateOfBirth.trim()) errObj.dateOfBirth = true;
        if (!schoolName.trim()) errObj.schoolName = true;
        if (!schoolAddress.trim()) errObj.schoolAddress = true;
        setError(errObj);
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h2>PLEASE ADD YOUR DETAILS</h2>
                </div>
            </div>
            <div className = "row align-items-center">
                <div className="col-9">
                    <form noValidate onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlform="RollNumber">RollNumber</label>
                            <input noValidate id="rollNumber" 
                                    type="number" 
                                    placeholder="21"
                                    name="rollNumber"
                                    value={rollNumber}
                                    onChange= {(e)=> setRollNumber(e.target.value)}
                                    className= {`form-control ${error.rollNumber ? 'is-invalid' : ''}`}/>
                                    <p className="invalid-feedback">Required</p>
                       </div>
                        <div className="form-group">
                            <label htmlform="Address">Address</label>
                                <input noValidate id="address" 
                                        type="text" 
                                        placeholder="Sector V"
                                        name="address"
                                        value={address}
                                        onChange= {(e)=> setAddress(e.target.value)}
                                        className= {`form-control ${error.address ? 'is-invalid' : ''}`} />
                                        <p className="invalid-feedback">Required</p>
                        </div>
                        <div className="form-group">
                            <label htmlform="Date">Date</label>
                                <input noValidate id="date" 
                                        type="date" 
                                        placeholder="12-3-1990"
                                        name="dateOfBirth"
                                        value={dateOfBirth}
                                        onChange= {(e)=> setDateOfBirth(e.target.value)}
                                        className= {`form-control ${error.dateOfBirth? 'is-invalid' : ''}`}/>
                                        <p className="invalid-feedback">Required</p>
                        </div>
                        <div className="form-group">
                            <label htmlform="SchoolName">School Name</label>
                                <input  noValidate id="SchoolName" 
                                        type="text" 
                                        placeholder="Delhi Public School"
                                        name="SchoolName"
                                        value={schoolName}
                                        onChange= {(e)=> setSchoolName(e.target.value)}
                                        className={`form-control ${error.schoolName ? 'is-invalid' : ''}`} />
                                        <p className="invalid-feedback">Required</p>
                        </div>
                        <div className="form-group">
                            <label htmlform="SchoolAddress">SchoolAddress</label>
                                <input noValidate id="SchoolAddress" 
                                        type="text" 
                                        placeholder="Near Ruby Hospital"
                                        name="SchoolAddress"
                                        value={schoolAddress}
                                        onChange= {(e)=> setSchoolAddress(e.target.value)}
                                        className= {`form-control ${error.schoolAddress ? 'is-invalid' : ''}`}/>
                                        <p className="invalid-feedback">Required</p>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-primary mr-2 btn-lg">
                                Save| <i className="fas fa-save"></i>
                            </button>
                            <button type="button"
                                    onClick={()=> history.replace("/info")}
                                    className="btn btn-primary btn-lg">
                               Cancel| <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateInfoAction: (data, onSuccess, onError) =>
        dispatch(createDetails(data,onSuccess,onError)),

    dispatchUpdateDetailsAction: (detailsId, data,onSuccess, onError) =>
        dispatch(updateDetailsById(detailsId, data, onSuccess, onError)),
    
    dispatchGetDetailsByIdAction:(detailsId, onSuccess)=>
        dispatch(getDetailsById(detailsId, onSuccess))     
})

export default connect(null, mapDispatchToProps)(EditstudentInfo);