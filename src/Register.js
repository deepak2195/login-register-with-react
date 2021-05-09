import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          fields: {},
          errors: {}
        }
      }
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["firstname"]){
          formIsValid = false;
          errors["firstname"] = "error";
        }
        if(!fields["lastname"]){
            formIsValid = false;
            errors["lastname"] = "error";
        }
        //Email
        if(!fields["emailaddress"]){
          formIsValid = false;
          errors["emailaddress"] = "error";
        }
        if(typeof fields["emailaddress"] !== "undefined"){
          let lastAtPos = fields["emailaddress"].lastIndexOf('@');
          let lastDotPos = fields["emailaddress"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["emailaddress"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["emailaddress"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["emailaddress"] = "error";
          }
        }
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "error";
        }
        this.setState({errors: errors});
        return formIsValid;
      }
    
      contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
          alert("Form submitted");
        }else{
          alert("Form has errors.")
        }
      }
    
      handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }
    
      render(){
        return (
          <>        	
            <h1>Sign Up for free.</h1>
            <form name="registerform" className="registerform" onSubmit= {this.contactSubmit.bind(this)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className={`form-control ${this.state.errors["firstname"]}`} name="firstname" placeholder="First Name" onChange={this.handleChange.bind(this, "firstname")}/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className={`form-control ${this.state.errors["lastname"]}`} name="lastname" placeholder="Last Name" onChange={this.handleChange.bind(this, "lastname")}/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className={`form-control ${this.state.errors["emailaddress"]}`} name="emailaddress" placeholder="Email Address" onChange={this.handleChange.bind(this, "emailaddress")}/>
                </div>
                <div className="form-group">
                    <input type="password" className={`form-control ${this.state.errors["password"]}`} name="password" placeholder="Set a Password" onChange={this.handleChange.bind(this, "password")} />
                </div>
                <button type="submit" className="btn btn-primary">GET STARTED</button>
            </form>
          </>
        )
      }
}
export default Register;