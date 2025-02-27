import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
const Navbhar = () => {
  return (
    <>
      <Navcontainer>
        <ul className="ul">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/technology">
              Technology
            </Link>
          </li>
          <li>
            <Link className="link" to="science">
              Science
            </Link>
          </li>
          <li>
            <Link className="link" to="sport">
              Sport
            </Link>
          </li>
          <li>
            <Link className="link" to="business">
              Business
            </Link>
          </li>
          <li>
            <Link className="link" to="health">
              Health
            </Link>
          </li>
          <li>
            <Link className="link" to="entertainment">
              Entertainment
            </Link>
          </li>
        </ul>
      </Navcontainer>
    </>
  );
};

const Navcontainer = styled.div`
  background-color: black;
  padding: 0.1rem;
  position: sticky;

  .ul {
    overflow: auto;

    display: flex;
    justify-content: center;

    li {
      float: left;
      list-style: none;
      margin: 13px 15px;
      font-size: 1.3rem;

      .link {
        padding: 3px 3px;
        text-decoration: none;
        color: white;

        &:hover {
          color: red;
        }
      }
    }
  }
`;

export default Navbhar;
