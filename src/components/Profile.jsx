import { getDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [propic, setPropic] = useState("");
  const [pronam, setPronam] = useState("");
  const [progen, setProgen] = useState("");
  const [prodob, setProdob] = useState("");
  return (
    <Profilebasic>
      {edit ? (
        <form className="proedit" type="submit">
          <label> Profile Picture </label>
          <input className="Propic" type="file" />

          <label> Fullname </label>
          <input />

          <label> Gender </label>
          <input />

          <label> D.O.B </label>
          <input />

          <button
            className="save"
            onClick={(e) => {
              setEdit(false);
              e.preventDefault();
              console.log(edit);
            }}
            type="submit"
          >
            save
          </button>
        </form>
      ) : (
        <div className="protrue">
          {propic ? (
            "propic"
          ) : (
            <img
              className="propicd"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="pic"
            />
          )}
          {pronam ? <h3> "proname" </h3> : <h3>"Full Name"</h3>}
          {progen ? <h3> "gen" </h3> : <h3> "Gender"</h3>}
          {prodob ? <h3> "DOB" </h3> : <h3> "D.O.B"</h3>}
          <button
            className="edit"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </Profilebasic>
  );
}
const Profilebasic = styled.div`
  position: absolute;
  top: 100px;
  margin: 50px;
  padding: 20px;
  background: linear-gradient(red, yellow);
  width: 200px;
  height: 350px;
  border: 1px solid black;
  border-radius: 12.5px;
  margin-left: 950px;
  border: 1px solid black;
  .proedit {
    width: 100%;
    height: auto;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    input {
      padding: 5px;
      height: 7.5px;
      width: 90%;
    }
  }
  .save {
  }
  .edit {
  }

  .protrue {
    width: 100%;
    max-height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: -5px;
  }
  .propicd {
    width: 75px;
    height: 75px;
  }
`;
