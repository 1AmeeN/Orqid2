import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Jshome from "./Jshome";
export default function About(props) {
  const [user, setUser] = useState({});
  const [canview, setCanView] = useState(false);
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

  return (
    <div>
      {canview ? (
        <Aboutbasic>
          <Navbar />
          <div>aBOUT PAGE</div>
          <Footer />
        </Aboutbasic>
      ) : (
        <Jshome />
      )}
    </div>
  );
}
const Aboutbasic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(#e9f5f0, #f5e9ef);
`;
