import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { getDatabase, ref, set, get } from "firebase/database";
import { db } from "./firebase-config";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import moment from "moment";
import Jshome from "./Jshome";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import Footer from "./Footer";
import Profile from "./Profile";

export default function Secrets({ date }) {
  const timeAgo = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [input1, setInput1] = useState("");
  const [input3, setInput3] = useState("");
  const [input2, setInput2] = useState("");
  const [input4, setInput4] = useState("");
  const [posts, setPosts] = useState([]);
  const [canView, setCanView] = useState(false);
  const [user, setUser] = useState({});
  const [image, setImage] = useState(null);

  // const db = getDatabase();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user) {
      setCanView(true);
    } else {
      setCanView(false);
    }
  }, [user]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (input1 !== "") {
      await addDoc(collection(db, "posts"), {
        input1,
        input2,
        input3,
        input4,
        completed: false
      });
    }
    console.log(user.email);
    console.log(user.uid);
    console.log(user);

    setInput1("");
    setInput3("");
  };

  return (
    <div>
      {canView ? (
        <Secretsbasic>
          <Navbar />

          <div className="content">
            <div className="posts">
              <div className="subpost">
                <input
                  className="tar"
                  type="text"
                  value={input1}
                  onChange={(e) => {
                    setInput1(e.target.value);
                    setInput2(user.email);
                    setInput3(timeAgo);
                    setInput4(user.uid);
                  }}
                  name="in"
                />

                <input
                  className="imgCh"
                  type="file"
                  onChange={handleImageChange}
                />

                <button
                  className="post1"
                  onClick={handleSave}
                  title="share memories with others"
                >
                  Post
                </button>
              </div>
              <Profile />
            </div>

            <div className="oposts">
              {input1 ? (
                <h4>
                  {input1} +"<i> posted by </i>" {user.email} @ {input3}
                </h4>
              ) : null}
            </div>
          </div>

          <Footer />
        </Secretsbasic>
      ) : (
        <Jshome />
      )}
    </div>
  );
}
const Secretsbasic = styled.div`
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(#e9f5f0, #f5e9ef);

  .content {
    width: auto;
    min-height: 80vh;
    padding: 20px;
  }
  .posts {
    height: fit-content;
    width: 100%;
    margin: 20px 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .tar {
      width: 150px;
      height: 50px;
      border-color: goldenrod;
      border-radius: 12.5px;
      font-size: 15px;
      font-weight: 400;
      margin: 5px;
    }
    .tar:hover {
      border-color: blueviolet;
    }
    .tar::selection {
      border-color: lightgrey;
    }
    .post1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      border-radius: 12.5px;
      border-style: none;
      background-color: hotpink;
      color: #fff;
      letter-spacing: 1px;
      font-size: 15px;
      font-weight: 600;
      margin-top: 20px;
      margin-left: -50px;
    }
    .post1:hover {
      background-color: #9d0ef0;
    }
  }

  .oposts {
    display: grid;
    grid-template-columns: 0.5fr;
    border: 1px solid black;
    max-width: 70%;
    margin-left: 50px;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    ul {
      list-style: none;
      width: fit-content;
      height: auto;
      background: #fff;
      border-radius: 12.5px;
      padding: 20px;
    }
    img {
      width: 50vw;
      height: auto;
      border-radius: 25px;
    }
  }
  .inter {
    background-color: cornsilk;
    border-radius: 12.5px;
    padding: 5px;
    color: hotpink;
    width: 100%;
    height: fit-content;
    margin: 20px 0;
    h1 {
      font-size: 20px;
    }
  }
  .subpost {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    border: 1px solid black;
    max-height: 150px;
  }
  .imgCh {
    margin-top: 20px;
  }
`;
