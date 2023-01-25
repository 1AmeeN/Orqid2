import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Navbarbasic>
      <Link to="/Secrets">
        <img
          src="https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/1dee000a-0669-44db-a05c-ba6a74a19734/design-previews/4abc3a6f-a2cb-4de6-b80a-a1343b336134/1672751380693-thumbnail.jpeg"
          alt="Logo"
        />
      </Link>

      <ul>
        <Link to="/About">
          <li>About</li>
        </Link>
        <li>Contacts</li>
      </ul>
    </Navbarbasic>
  );
}
const Navbarbasic = styled.div`
  width: 100vw;
  max-height: fit-content;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: cornsilk;
  padding: 0 5px;
  ul {
    list-style: none;
    font-weight: 800;
    color: #966d5c;
    display: flex;
    justify-content: center;
    align-items: center;
    Link {
      background-color: #fbf4f4;
    }
  }
  li {
    width: 100px;
    background-color: #fbf4f4;
    border-radius: 12.5px;
    padding: 15px;
    font-size: 18px;
  }
  li:hover {
    color: #dfa4a4;
    text-decoration: underline;
  }
  img {
    width: 100px;
    height: auto;
  }
`;
