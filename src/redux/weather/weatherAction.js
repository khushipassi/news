import {WEATHER_REQUEST,WEATHER_SUCCESS,WEATHER_FAILURE} from './weatherTypes'

export const weatherRequest=()=>{
    console.log('request')
    return{
        type:WEATHER_REQUEST
    }
}

export const weatherSuccess=data=>{
    console.log('success',data)
    return{
        type:WEATHER_SUCCESS,
        payload:data
    }
}

export const weatherFailure=error=>{
    console.log('failure',error)
    return{
        type:WEATHER_FAILURE,
        playload:error
    }
}
