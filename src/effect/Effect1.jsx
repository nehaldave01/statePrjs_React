import React, { useEffect, useState } from "react";

const Effect1 = () => {
  const [first, setfirst] = useState(1);
  const [second, setsecond] = useState(100);

  const click1 = () => {
    setfirst(first + 1);
  };
  const click2 = () => {
    setsecond(second - 1);
  };

  useEffect(() => {
    console.log("a",first);
  }, [first]);

  useEffect(() => {
    console.log("b",second);
  }, [second]);

  return (
    <>
      <button onClick={click1}>click me1</button>
      <h1>{first}</h1>
      <hr />
      <button onClick={click2}>click me2</button>
      <h1>{second}</h1>
    </>
  );
};

export default Effect1;
