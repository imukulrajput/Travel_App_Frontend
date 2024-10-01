import { AuthLogin, AuthSignup } from "../index";
import "./AuthModal.css";
import { useAuth } from "../../context";
import { useRef,useEffect } from "react";

export const AuthModal = () => {

    const { authDispatch ,selectedTab} = useAuth();
    const modalRef = useRef(null);

    const handleLoginClick = () =>{
          authDispatch({
            type: "SET_TO_LOGIN"
          })
    }

    const handleSignupClick = () =>{
        authDispatch({
            type: "SET_TO_SIGNUP"
        })
  }

  const handleModalCloseClick = () =>{
        authDispatch({
            type: "SHOW_AUTH_MODAL"
        })
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        authDispatch({
          type: "SHOW_AUTH_MODAL",
        });
          
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside); 

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef,]);

  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute shadow right-0" ref={modalRef}>
        <div className="d-flex align-center shadow">
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer
              ${selectedTab === "login" ? "btn-auth-selected" : ""}`} onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer 
                ${selectedTab === "signup" ? "btn-auth-selected" : ""}`} onClick={handleSignupClick}
          >
            Signup
          </button>
          <button className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer" onClick={handleModalCloseClick}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div>   
          {selectedTab === "login" ? (
            <AuthLogin />
          ) : selectedTab === "signup" ? (
            <AuthSignup />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
