import "./Auth.css"
import { useAuth } from "../../context"
import { validateName,validateEmail,validatePassword,validateNumber } from "../../utils"
import { signupHandler } from "../../services"
import { useAlert } from "../../context"

let isNumberValid,isNameValid,isEmailValid,isPasswordValid,isConfrimPasswordValid;

export const AuthSignup = () =>{

   const { username , email, password , number,confirmPassword , authDispatch} = useAuth();
   const { setAlert } = useAlert();
    
   console.log({ username , email, password , number,confirmPassword});

  const handleNumberChange = (event) =>{
     isNumberValid = validateNumber(event.target.value);
    if(isNumberValid){
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value
   })
    }else{
       console.log("Invalid number");
    }
        
  }

  const handleNameChange = (event) =>{
     isNameValid = validateName(event.target.value);
    if(isNameValid){
      console.log("Valid Input");
      authDispatch({
        type: "NAME",
        payload: event.target.value
   })
    }else{
      console.log("Invalid name")
    }
    
}

const handleEmailChange = (event) =>{
   isEmailValid = validateEmail(event.target.value);
  if(isEmailValid){
    console.log("Valid Input");
    authDispatch({
      type: "EMAIL",
      payload: event.target.value
 })
  }else{
    console.log("Email valid")
  }
  
}

const handlePasswordChange = (event) =>{
   isPasswordValid = validatePassword(event.target.value);
  if(isPasswordValid){
    console.log("Valid Input");
    authDispatch({
      type: "PASSWORD",
      payload: event.target.value
 })
  }else{
     console.log("Invalid Password")
  }
  
}

const handleConfirmPasswordChange = (event) =>{
   isConfrimPasswordValid = validatePassword(event.target.value);
  if(isConfrimPasswordValid){
    console.log("Valid Input");
    authDispatch({
      type: "CONFIRM_PASSWORD",
      payload: event.target.value
 })
  }else{
    console.log("Invalid Confrim Password");
  }
  
}

const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("clicked");
        
        if(isNumberValid && isNameValid && isEmailValid && isPasswordValid && isConfrimPasswordValid){
           signupHandler(username,number,email,password)
        }
         authDispatch({
          type: "CLEAR_USER_DATA",
         });
         setAlert({
          open: true,
          message: "Signup successfuly, Now you can login",
          type: "success",
        }); 
}

    return (
        <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={number}
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
            
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
             onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
             onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>

    )
}