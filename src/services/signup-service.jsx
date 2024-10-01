import axios from "axios";

export const signupHandler = async (username,number,email,password)=>{
     try{
            const data = await axios.post("https://travel-app-8a1c.onrender.com/api/auth/register",{
                username : username ,
                number : number,
                email: email,
                password: password
            });
            console.log(data);
     }catch(err) {
        if (err.response) {
          console.error("Error from server:", err.response.data); // Logs detailed server error
        } else if (err.request) {
          console.error("No response received from server:", err.request);
        } else {
          console.error("Error during request setup:", err.message);
        }
      }
}