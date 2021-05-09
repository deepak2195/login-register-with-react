import React from 'react';

class Login extends React.Component{
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
      
         //Email
         if(!fields["username"]){
          formIsValid = false;
          errors["username"] = "error";
        }
        if(typeof fields["username"] !== "undefined"){
          let lastAtPos = fields["username"].lastIndexOf('@');
          let lastDotPos = fields["username"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["username"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["username"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["username"] = "error";
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
           <h1>Welcome Back!</h1>
            <form name="loginform" className="loginform" onSubmit= {this.contactSubmit.bind(this)}>
                <div className="form-group">
                    <input type="email" className={`form-control ${this.state.errors["username"]}`} name="username" placeholder="Email Address" onChange={this.handleChange.bind(this, "username")} />
                </div>
                <div className="form-group">
                    <input type="password" className={`form-control ${this.state.errors["password"]}`} name="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} />
                </div>
                <button type="submit" className="btn btn-primary">LOG IN</button>
            </form>
          </>
        )
      }
}
export default Login;