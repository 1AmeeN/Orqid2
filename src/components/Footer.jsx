import React, { useState } from "react";
import styled from "styled-components";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

export default function Footer(props) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="signout">
      {user && user.email}{" "}
      <button className="signbut" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
