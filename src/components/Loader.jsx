import React from "react";
import Loads from "../Asset/loader.gif";
import Styled from "styled-components";
const Loader = () => {
  return (
    <>
      <Loading>
        <div className="gg">
          <img src={Loads} alt="loading" />
        </div>
      </Loading>
    </>
  );
};

const Loading = Styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:6rem;
   /* background: red; */

  .gg{
   
  }
  

`;

export default Loader;
