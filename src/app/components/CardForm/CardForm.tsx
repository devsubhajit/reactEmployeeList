import * as React from "react";
import "./cardform.css";

const CardForm = (props: any) => {
  return (
    <form className="formContentInside">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Name"
          onChange={e => props.updateDetails(e)}
          value={props.formUpdate.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          className="form-control"
          id="designation"
          placeholder="Enter Desgination"
          onChange={e => props.updateDetails(e)}
            value={props.formUpdate.designation}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={e => props.updateDetails(e)}
            value={props.formUpdate.contact}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={()=> props.onUpdate()}
      >
        Submit
      </button>
    </form>
  );
};

export default CardForm;
