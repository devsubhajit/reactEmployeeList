import * as React from "react";
import './card.css'


 const Card = (props:any) => {

   return(
    //  <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}>
    <div className={(props.editId == props.data.id)? 'card active': 'card' } >
      <div className="card-body">
        <div className="cardImg">{props.data.name.split(' ')[0].split('')[0]}{props.data.name.split(' ')[1].split('')[0]}</div>
        <div className="cardDetails">
          <p className="cardName">{props.data.name}</p>
          <p className="designation">{props.data.designation}</p>
          <p className="contact">{props.data.contact}</p>
        </div>
        <div className="cardBtnContainer">
          <button className="btn btn-primary cardButtons" onClick={(e) => {props.onEdit(props.data.id)}}>edit</button>
          <button className="btn btn-secondary cardButtons" onClick={(e)=> props.onDelete(props.data.id)}>delete</button>
        </div>
      </div>
    </div>
)
   };

export default Card;
