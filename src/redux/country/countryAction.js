import {COUNTRY_CHANGE} from './countryTypes'

export const countryChange=country=>{
    return{
        type:COUNTRY_CHANGE,
        payload:country
    }
}