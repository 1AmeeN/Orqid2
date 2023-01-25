import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [user]);
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      {login ? (
        <Link className="Gos" to="./Secrets">
          Go-Inn
        </Link>
      ) : (
        <Link to="/" />
      )}
      <Logibasic>
        <input
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          type="email"
          placeholder="Email address"
        />
        <input
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleLogin} className="logbut">
          Log in
        </button>
        <hr />
      </Logibasic>
      <>
        <p className="LogFoo">
          <span>
            <b>dont have an account ?</b>
          </span>{" "}
          click here to sign up.
        </p>
      </>
    </div>
  );
}

const Logibasic = styled.div`
  width:100%;
  height: 300px;
  background-color: #fff;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
  margin: 10px;
  padding: 15px;
  border-radius: 7.5px;
  box-shadow:-webkit-box-shadow: 7px 7px 14px -1px rgba(87,78,87,0.88);
-moz-box-shadow: 7px 7px 14px -1px rgba(87,78,87,0.88);
box-shadow: 7px 7px 14px -1px rgba(87,78,87,0.88);
  input {
    height: 50px;
    width: 100%;
    border: 0.5px solid lightgrey;
    border-radius: 7.5px;
    font-size: 17px;
    font-weight: 200;

  }
  input:focus {
    background-color: lightblue;
  }
  input::placeholder{
padding:20px;
  }
  input::selection{
   border-color:indigo;
  }
  
  .logbut {
    height: 50px;
    width: 100%;
    border-radius: 7.5px;
    font-size: 20px;
    border: none;
    background-color: #980cff;
    color: #fff;
    font-weight:600;
    cursor: pointer;
  }.logbut:hover{
background-color:#8300e4;
  }
 
  hr {
    width: 90%;
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-top: .5px solid indigo;
  }

`;
