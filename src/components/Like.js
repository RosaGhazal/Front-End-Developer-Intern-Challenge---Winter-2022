import React, { useState } from "react";
import Heart from 'react-animated-heart';

// import './App.css';

export default function Like() {
    const [isClick, setClick] = useState(false);
    return (
      <div >
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
    );
  }

