import React from "react";

const Child_form1 = ({ handelchange, data, seterr, settabno, err }) => {
  const submit1 = (e) => {
    e.preventDefault();
    if (validate()) {
      settabno(2);
    }
  };

  const validate = () => {
    let localErr = {};
    let valid = true;

    if (data.name.length === 0) {
      localErr.name = "name is required";
      valid = false;
    }
    if (data.email.length === 0) {
      localErr.email = "email is required";
      valid = false;
    }

    seterr(localErr);
    return valid;
  };
  return (
    <>
      <form onSubmit={submit1}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter name here"
            onChange={handelchange}
            value={data.name}
          />
        </div>
        {err.name && <p>{err.name}</p>}
        <div>
          <input
            type="text"
            name="email"
            placeholder="enter email here"
            onChange={handelchange}
            value={data.email}
          />
        </div>
        {err.email && <p>{err.email}</p>}
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default Child_form1;
