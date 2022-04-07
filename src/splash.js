
import React, { useEffect } from "react";
import Confetti from "react-confetti";

const Nothing = () =>
{
    return(<></>);
}

const Splash = () => {
useEffect(() => {
    const timer = setTimeout(() => {
        return <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        opacity={0.9}
        gravity={0.07}
      />;
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
};


export default Splash;