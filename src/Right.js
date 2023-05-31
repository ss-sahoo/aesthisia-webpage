import React from 'react'
import "./Right.css";
import petal from "./images/petals 1.png"

function Right() {
  return (
    <div className="rightside">
      <div className="right_top">
        <img src={petal} alt="" />
        <h1>
          Welcome <span>Back</span>{" "}
        </h1>
        <h4>Glad to see you, Again</h4>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter Password" />
        <button>Log In</button>
        <h4>
          <span className=""> Don't account yet?</span>
          <span className="" >
            Sign Up 
          </span>{" "}
        </h4>
      </div>
    </div>
  );
}

export default Right
