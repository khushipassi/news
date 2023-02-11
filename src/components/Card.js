import { NavLink } from "react-router-dom";

const Card = (props) => {
//   console.log(props)
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.title} style={{minHeight:"35vh"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <NavLink
              to={`/${props.url}`}
              className="btn text-warning bg-dark font-weight-bold"
            >
              Visit
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
