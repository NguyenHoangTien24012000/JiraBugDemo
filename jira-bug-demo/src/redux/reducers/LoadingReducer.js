import { CLOSE_LOADING, OPEN_LOADING } from "../types/LoadingTypes"

const initialState = {
    loading : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LOADING :
            return{...state,loading :true}
        case CLOSE_LOADING :
            return {...state,loading : false}
   

    default:
        return state
    }
}
