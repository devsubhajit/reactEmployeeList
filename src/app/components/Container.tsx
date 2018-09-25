import * as React from "react";
import { CardList } from "./CardList/CardList";

export class Container extends React.Component {
  state = {
    employees: [
      {
        id: 1,
        name: "Subhajit Das",
        designation: "UI/UX Engineer",
        contact: "subhajit@gmail.com"
      },
      {
        id: 2,
        name: "Gopal Krishnan",
        designation: "UI Designer",
        contact: "gopal@gmail.com"
      },
      {
        id: 3,
        name: "Antara Chandra",
        designation: "jr. Developer",
        contact: "antara@gmail.com"
      }
    ],

    isForm: false,
    editValue: 0,
    updateForm: {
      id: 0,
      name: "",
      designation: "",
      contact: ""
    }
  };

  handleDelete = (e: any) => {
    const employees = this.state.employees.filter(emp => emp.id !== e);
    this.setState({ employees });
  };

  public employeeDetails: any = {
    id: 0,
    name: "",
    designation: "",
    contact: ""
  };

  editEmployee = (e: any) => {
    let getEmpIndex = this.state.employees
      .map(e => {
        return e.id;
      })
      .indexOf(e);
    let editingEmp = {
      id: this.state.employees[getEmpIndex].id,
      name: this.state.employees[getEmpIndex].name,
      designation: this.state.employees[getEmpIndex].designation,
      contact: this.state.employees[getEmpIndex].contact
    };
    this.setState({ updateForm: editingEmp, editValue: e, isForm: true});
    this.employeeDetails = editingEmp;
  };
  addFormOpen = () => {
    this.setState({ isForm: true });
  };

  /**
   * Submit form function
   */
 

  updateDetails = (e: any) => {
    if (e.target.id === "name") {
      this.employeeDetails.name = e.target.value;
    }
    if (e.target.id === "designation") {
      this.employeeDetails.designation = e.target.value;
    }
    if (e.target.id === "email") {
      this.employeeDetails.contact = e.target.value;
    }
    this.setState({ updateForm: this.employeeDetails });
  };

  formSubmit = () => {
    let employees = this.state.employees;
    let updateForm = {
      id: 0,
      name: "",
      designation: "",
      contact: ""
    };
    if (this.state.editValue === 0) {
      employees.push({
        id: this.state.employees.length + 1,
        name: this.employeeDetails.name,
        designation: this.employeeDetails.designation,
        contact: this.employeeDetails.contact
      });

      this.setState({
        employees: employees,
        editValue: 0,
        isForm: false,
        updateForm: updateForm
      });
      
    } else {
      // update the array with the index number
      let getIndex = this.state.employees
        .map(e => {
          return e.id;
        })
        .indexOf(this.state.editValue);
      let empId = this.state.employees[getIndex].id;
      let updatedEmployee = {
        id: empId,
        name: this.employeeDetails.name,
        designation: this.employeeDetails.designation,
        contact: this.employeeDetails.contact
      };
      employees[getIndex] = updatedEmployee;
      this.setState({
        employees: employees,
        editValue: 0,
        isForm: false,
        updateForm: updateForm
      });
    }
    this.employeeDetails = {
      id: 0,
      name: "",
      designation: "",
      contact: ""
    };
  };

  render() {
    return (
      <CardList
        employees={this.state.employees}
        formState={this.state.isForm}
        editId={this.state.editValue}
        formUpdate={this.state.updateForm}
        onDelete={this.handleDelete}
        onEdit={this.editEmployee}
        onUpdate={this.formSubmit}
        openForm={this.addFormOpen}
        // updateName={this.updateName}
        updateDetails={this.updateDetails}
      />
    );
  }
}
