import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [signin, setSignin] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user) {
      setSignin(true);
    } else {
      setSignin(false);
    }
  }, [user]);
  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Sineupbasic>
        <input
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
          placeholder="Sign in Email address"
          type="email"
        />
        <input
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
          placeholder="Sign in Password"
          type="password"
        />

        <button onClick={handleRegister} className="sinebut">
          Submit
        </button>
        <hr />
      </Sineupbasic>
      <p className="LogFoo">
        <span>
          <b>if you have an account ?</b>
        </span>{" "}
        click here to log in.
      </p>
      {user ? (
        <Link className="Gos" to="./Secrets">
          Go-Inn
        </Link>
      ) : null}
    </div>
  );
}

const Sineupbasic = styled.div`
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
    background-color: lightgreen;
  }
  input::placeholder{
padding:20px;
  }
  input::selection{
   border-color:lightgreen;
  }
  
  .sinebut {
    height: 50px;
    width: 100%;
    border-radius: 7.5px;
    font-size: 20px;
    border: none;
    background-color: lightgreen;
    color: #fff;
    font-weight:600;
    cursor: pointer;
  }.sinebut:hover{
background-color:green;
  }
 
  hr {
    width: 90%;
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-top: .5px solid indigo;
  }

`;
