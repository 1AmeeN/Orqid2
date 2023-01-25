import React, { StrictMode } from "react";
import Home from "./Home";
import styled from "styled-components";
import Secrets from "./Secrets";
import About from "./About";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
export default function App() {
  return (
    <StrictMode>
      <Appbasic>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Secrets" element={<Secrets />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Appbasic>
    </StrictMode>
  );
}
const Appbasic = styled.div``;

// https://codesandbox.io/s/firebase-forked-j3fs8k?file=/src/App.js
