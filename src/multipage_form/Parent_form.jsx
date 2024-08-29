import React, { useState } from "react";
import Child_form1 from "./Child_form1";
import Child_form2 from "./Child_form2";

const Parent_form = () => {
  const [tabno, settabno] = useState(1);
  const [data, setdata] = useState({ name: "", email: "" });
  const [err, seterr] = useState({});

  const click1 = (tab) => {
    settabno(tab);
  };    

  const handelchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center gap-5">
          <button className="btn btn-primary" onClick={() => click1(1)}>
            Tab1
          </button>
          <button className="btn btn-primary" onClick={() => click1(2)}>
            Tab2
          </button>
        </div>
      </div>

      {tabno === 1 && (
        <Child_form1
          handelchange={handelchange}
          data={data}
          seterr={seterr}
          settabno={settabno}
          err={err}
        />
      )}
      {tabno === 2 && <Child_form2 />}
    </>
  );
};

export default Parent_form;
