import { combineReducers } from "redux"
import fetchReducer from "./fetch/fetchReducer"
import countryReducer from "./country/countryReducer"

const rootReducer=combineReducers({
    fetch:fetchReducer,
    country:countryReducer
})

export default rootReducer