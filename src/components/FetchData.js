import axios from 'axios'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure } from "../redux";
import store from "../redux/store";

const FetchData = (props) => {
  console.log("new",props)

  const fetchUsers=()=>{

    return function(dispatch){

        dispatch(fetchUsersRequest())
        axios.get(
          props.country?
          (props.cat?
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e38e2182b6874a9383c8181af82df96b`:
          `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=e38e2182b6874a9383c8181af82df96b`):
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=e38e2182b6874a9383c8181af82df96b`)
        .then(response=>{
            const data=response.data.articles
            dispatch(fetchUsersSuccess(data))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
  
    }
  }

  useEffect(()=>{
    store.dispatch(fetchUsers());
  },[props.country,props.cat])

  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div className="conatiner d-flex justify-content-center align-items-center flex-column my-3"
      style={{minHeight:"100vh"}}> 
        {props.users? props.users.map((items,index)=>(
          <>
            <div key={index} className="container my-3" style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
              <h5 className='my-2'>{items.title}</h5>
              <div className='d-flex justify-content-center align-items-center'>
                <img 
                src={items.urlToImage} 
                alt="Image Not Found"
                className='img-fluid' 
                style={{
                  width:"100%",
                  height:"300px",
                  objectFit:"cover"}}
                />
              </div>
              <p>{items.content}</p>
              <a href={items.url} target="blank">View More</a>
            </div>
          </>
        ))
        
        :"Loading..."}
      </div>
    </div>
  );
};

const mapStateToProps=state=>{
  return{
    loading:state.fetch.loading,
    users:state.fetch.users,
    error:state.fetch.error,
    country:state.country.country
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    fetchUsersRequest:()=>dispatch(fetchUsersRequest()),
    fetchUsersSuccess:users=>dispatch(fetchUsersSuccess(users)),
    fetchUsersFailure:error=>dispatch(fetchUsersFailure(error))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FetchData);
