import hotBg from "../assets/hot.jpg"
import coldBg from '../assets/cold.jpg'
import store from "../redux/store";
import { connect } from 'react-redux';


const weatherData=(props)=>{
    console.log(props);

    return function(dispatch){

        dispatch(weatherRequest())
        axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=3cd24ffd5125c668d7793c7143d04d40")
        .then(response=>{
            console.log(response)
            const data=response.data.articles
            dispatch(weatherSuccess(data))
        })
        .catch(error=>{
            console.log(error)
            // dispatch(fetchUsersFailure(error.message))
        })
  
    }
}

useEffect(()=>{
    store.dispatch(weatherData());
},[props.country])


function Weather() {
  return (
    <div className='weather' style={{backgroundImage:`url(${coldBg})`}}>
        <div className="overlay">
            <div className="container">
                <div className="section section__inputs">
                    <input type="text" name="city" placeholder="Enter City"/>
                    <button>F</button>
                </div>
            </div>
        </div>

        <div className='section section__temperature'>
            <div className='icon'>
                <h3>London, GB</h3>
                <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather icon"/>
                <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
                <h1>34 C</h1>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps=state=>{
    return{
      loading:state.weather.loading,
      data:state.weather.data,
      error:state.waether.error,
      country:state.country.country
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
      weatherRequest:()=>dispatch(weatherRequest()),
      weatherSuccess:users=>dispatch(weatherSuccess(users)),
      weatherFailure:error=>dispatch(weatherFailure(error))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Weather)