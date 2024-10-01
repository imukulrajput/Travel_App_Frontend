import axios from "axios";

export const loginHandler = async (number,password) =>{
     try{
          const {data:{accessToken: accessToken,username}} = await axios.post("https://travel-app-8a1c.onrender.com/api/auth/login",{
            number: number,
            password: password
          })
          console.log({accessToken,username});
          return { accessToken , username }
     }catch(err){
        console.log("unable to login")
     }
}