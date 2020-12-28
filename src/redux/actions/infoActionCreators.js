import * as constants from '../constants'

export const fetchAllDetails = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/api/details',
        success: (response) => (setAllDetails(response))
    }
})

export const createDetails = (data, onSuccess, onError) => ({
    type: constants.API,
    payload:{
        method: 'POST',
        url: '/api/details',
        data,
        success: (details)=> (addDetails(details)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const getDetailsById = (detailsId, onSuccess)=>({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/api/details/${detailsId}`,
        postProcessSuccess: onSuccess
    }
})

export const updateDetailsById = (detailsId,data,onSuccess,onError)=> ({
    type: constants.API,
    payload: {
        method:'PUT',
        url:`/api/details/${detailsId}`,
        data,
        success: (detailsId, data)=> (updateDetails(detailsId, data)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const addDetails = (details) => ({
    type: constants.ADD_INFO,
    payload: details
})

const setAllDetails = (data) => ({
    type: constants.SET_ALL_INFO,
    payload:data
})

const updateDetails=(detailsId, data) => ({
    type: constants.UPDATE_INFO,
    payload: {detailsId, data}
})