import * as constants from '../constants'

export default function infoReducer(state=[], action){
    switch(action.type){
        case constants.SET_ALL_INFO:
            return action.payload;
        case constants.ADD_INFO:
            return state.concat(action.payload)
        case constants.UPDATE_INFO: 
            return state.map(item =>{
                if(item._id === action.payload.infoId)
                    return {...item, ...action.payload.data}
                else
                    return item
            })
        case constants.RESET_USER_INFO:
            return[];
        default:
            return state           
    }
}