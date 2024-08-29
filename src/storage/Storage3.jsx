import { useState } from "react";

const Storage3 = () => {
  const [first, setfirst] = useState([]);

  const click1 = () => {
    let a = JSON.parse(localStorage.getItem("myArr"));
    console.log(a);
    setfirst(a);
  };

  const delete1 = () => {
    sessionStorage.removeItem("age");
  };
  return (
    <>
      <div>
        <button onClick={click1}>Get Data</button>

        {first.map((e) => {
          return (
            <>
              <h1>{e.name}</h1>
              <h1>{e.age}</h1>
              <h1>{e.course_name}</h1>
            </>
          );
        })}
      </div>
      <button onClick={delete1}>delete</button>
    </>
  );
};

export default Storage3;
