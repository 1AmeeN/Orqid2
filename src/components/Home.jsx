import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";
export default function Home() {
  var randomImage = new Array();

  //insert the URL of images in array
  randomImage[0] =
    "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  randomImage[1] =
    "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg";
  randomImage[2] =
    "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  randomImage[3] =
    "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  randomImage[4] =
    "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg";
  randomImage[5] =
    "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

  //generate a number and provide to the image to generate randomly
  var number = Math.floor(Math.random() * randomImage.length);

  const [sineUp, setSineUp] = useState(false);
  const [butName, setButName] = useState("sign up");
  function handleClick() {
    setSineUp(() => {
      return !sineUp;
    });
    setButName(() => {
      if (sineUp) {
        setButName("sign up");
      } else {
        setButName("log in");
      }
    });
  }

  return (
    <Homebase>
      <div>
        <h1>ORQID</h1>
        <div className="texta">
          <h2>
            <span className="a">What </span>
            <span className="b">images </span>
            <span className="c">will </span>
            <span className="d">you </span>
            <span className="e">post </span>
            <span className="f">and </span>
            <span className="g">share </span>
            <span className="h">today </span>
            <span className="i">? </span>
          </h2>
        </div>
        <div className="imgcard">
          <img src={randomImage[number]} alt="apsa" />
          <img src={randomImage[number]} alt="apsa" />
          <img src={randomImage[number]} alt="apsa" />
        </div>
      </div>
      <div>
        <div>{sineUp ? <Signup /> : <Login />}</div>
        <button
          style={{ backgroundColor: sineUp ? "indigo" : "green" }}
          className="have"
          onClick={handleClick}
        >
          {butName}
        </button>
      </div>
    </Homebase>
  );
}
const Homebase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 150px;
  place-items: center;
  gap: 100px;
  height: 100%;

  h1 {
    margin-top: -180px;
    font-size: 60px;
    font-weight: 800;
    color: #980cff;
    letter-spacing: 2px;
    font-family: "PT Serif", serif;
  }
  h2 {
    margin-top: -25px;
    font-size: 30px;
    font-weight: 200;
    line-height: 30px;
  }
  .have {
    border-style: none;
    border-radius: 25px;
    color: #fff;
    font-weight: 600;
    background-color: blue;
    margin-left: 20px;
    padding-top: -15px;
    padding: 2px;
    cursor: pointer;
    width: auto;
    height: 20px;
  }
  .imgcard {
    margin-top: 50px;
    max-width: 120px;
    height: 250px;
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  img {
    max-width: 200px;
    height: 250px;

    position: absolute;
    border: #fff 5px solid;
    box-shadow: 2px 2px 2px 2px;
  }
  img:nth-child(1) {
    transform: rotate(10deg);
    margin-left: 30px;
    box-shadow: 2px 2px 2px 2px;
  }
  img:nth-child(2) {
    transform: rotate(-10deg);
    margin-left: -30px;
    box-shadow: 2px 2px 2px 2px;
  }
`;
