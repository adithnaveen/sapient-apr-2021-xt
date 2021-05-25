import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class EmployeeForm extends Component {
    // controlled component where the source is with state variable 
    state = {
        name: "",
        email: "",
        phone: "",
        pic: "",
        formError: {
            name: "Name Is required",
            email: "Email is required",
            phone: "Phone is required"
        }
    }

    // on change event 
    tfHandler = (evt) => {
        // console.log(event.target);
        // let name = evt.target.name;
        // let value = evt.target.value;
        // console.log(name, value);

        // // version 1.0 
        // let modifiedState = {};
        // modifiedState[name] = value;
        // // console.log(modifiedState);
        // // when you mutate the state with setState then render is implicitly called 
        // this.setState(modifiedState);
        // console.log(this);

        // version 2.0 
        // this.setState({ [evt.target.name]: evt.target.value })
        // console.log(this.state);

        // version 3.0 
        let { name, value } = evt.target;
        let { formError } = this.state;

        switch (name) {
            case 'name':
                if (!value || value.length === 0) {
                    formError.name = "Name is required";
                } else if (value.length < 3 || value.length > 20) {
                    formError.name = "Name must be between 3 & 20 chars";
                } else {
                    formError.name = "";
                }
                break;
            case 'email':
                if (!value || value.length === 0) {
                    formError.email = "Email is required";
                } else if (!value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
                    formError.email = "Invalid Email Entered";
                } else {
                    formError.email = "";
                }
                break;
            case 'phone':
                if (!value || value.length === 0) {
                    formError.phone = "Phone is required";
                } else if (!value.match(/\d{10,12}$/)) {
                    formError.phone = "Phone number shoulbe be between 10 to 12 numbers"
                } else {
                    formError.phone = "";
                }
                break;

            default:
                break;
        }

        // render is called 
        this.setState({ [name]: value, formError })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="alert alert-danger">Controlled Component Demo</h3>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="name" className="control-label col-md-4">Employee Name</label>
                                <div className="col-md-8">
                                    <input type="text" name="name" id="name" className="form-control"
                                        onChange={this.tfHandler}
                                        value={this.state.name} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email" className="control-label col-md-4">Employee Email</label>
                                <div className="col-md-8">
                                    <input type="text" name="email" id="email" className="form-control"
                                        onChange={this.tfHandler}
                                        value={this.state.email} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="phone" className="control-label col-md-4">Employee Contact</label>
                                <div className="col-md-8">
                                    <input type="text" name="phone" id="phone" className="form-control"
                                        onChange={this.tfHandler}
                                        value={this.state.phone} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="pic" className="control-label col-md-4">Employee Picture</label>
                                <div className="col-md-8">
                                    <input type="text" name="pic" id="pic" className="form-control"
                                        onChange={this.tfHandler}
                                        value={this.state.pic} />
                                </div>
                            </div>
                            <button className="btn btn-primary">Save Employee</button>
                        </form>
                    </div>
                    <hr />
                    <div className="col">
                        <h2>Current State</h2>
                        <pre>{JSON.stringify(this.state, null, 3)}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;