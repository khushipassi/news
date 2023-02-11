import {WEATHER_REQUEST,WEATHER_SUCCESS,WEATHER_FAILURE} from './weatherTypes'

const initialState={
    loading:false,
    data:[],
    error:''
}

const fetchReducer=(state=initialState,action)=>{
    // console.log(action)
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }

        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.playload
            }
        
        default:
            return state 
    }
}

export default fetchReducer;