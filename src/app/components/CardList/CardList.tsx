import * as React from "react";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";

import "./cardlist.css";

interface MyProps {
  employees: any;
  onDelete: EventListener;
  formState: boolean;
  editId:Number;
  onEdit:EventListener;
  onUpdate:EventListener;
  formUpdate:object;
  openForm:any;
  updateDetails:any;
}

export class CardList extends React.Component<MyProps> {
  render() {
   
    return (
      <div>
        <div className="m-2">
          <button className="btn btn-primary" onClick={()=> this.props.openForm()}>Add New</button>
        </div>
        <div className="cardConainer" style={{ width: "18rem" }}>
          {this.props.employees.map((employee: object, index: number) => (
            <Card key={index} data={employee} editId={this.props.editId} onDelete={this.props.onDelete} onEdit={this.props.onEdit} />
          ))}
        </div>
        {this.props.formState ? (
          <div className="formConent">
            <CardForm 
            // empData={this.props.employees[this.props.employees.map( (e:any)=>{return e.id} ).indexOf(this.props.editId)]} 
            {...this.props}
            setid={this.props.editId}
            onUpdate={this.props.onUpdate}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
