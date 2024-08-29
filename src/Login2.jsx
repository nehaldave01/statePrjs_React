import { useState } from "react";
import "./login2.css";
import { FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Login2 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    date: "",
    range: "",
    radio: "",
    textarea: "",
    checkbox: "",
  });
  const [err, setErr] = useState({});
  const [arr, setArr] = useState([]);
    // console.log("first", ...arr);

  console.log(data);

  let emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  let numRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitclick = () => {
    if(validation()){
      let a = [...arr];
      let b = a.concat(data);
      setArr(b)
    }
  };

  const calculatedate = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();

    // Create date object for the birth date this year
    const thisYearBirthDate = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    // Check if today's date is before the birth date this year
    if (today < thisYearBirthDate) {
      age--;
    }

    return age;
  };

  const validation = () => {
    let localErr = {};
    let status = true;

    if (data.name.length === 0) {
      localErr.name = "(*Name is required)";
      status = false
    } else if (data.name.length < 5) {
      localErr.name = "(More than 5 chara)";
      status = false
    }

    if (data.email.length === 0) {
      localErr.email = "(Email is required)";
      status = false
    } else if (!emailRegex.test(data.email)) {
      localErr.email = "Invalid Email Address";
      status = false
    }

    if (data.number.length === 0) {
      localErr.number = "(Phone Number is required)";
      status = false
    } else if (!numRegex.test(data.number)) {
      localErr.number = "Invalid number";
      status = false
    }

    if (data.password.length === 0) {
      localErr.password = "(Password is required)";
      status = false

    } else if (!passwordRegex.test(data.password)) {
      localErr.password = "(Incorrect password)";
      status = false

    }

    if (!data.date) {
      localErr.date = "(Date of birth is required)";
      status = false

    } else if (calculatedate(data.date) < 18) {
      localErr.date = "(You must be at least 18 years old)";
      status = false

    }

    if (!data.range) {
      localErr.range = "Fill your range";
      status = false

    }

    if (!data.radio) {
      localErr.radio = "Select the gender";
      status = false

    }

    if (data.textarea.length === 0) {
      localErr.textarea = "(*Textarea is required)";
      status = false

    } else if (data.textarea.length < 20) {
      localErr.textarea = "(Minimum 20 characters)";
      status = false

    }

    if (!data.checkbox) {
      localErr.checkbox = "Please agree to the terms and conditions";
      status = false
    }

    setErr(localErr);
    return status
  };

  // --------------------
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col">
            <h1
              className="fw-bold my-4 text-center"
              style={{ color: "#090979" }}
            >
              Create new account
            </h1>
            <div className="row  justify-content-around mb-2">
              <div className=" col">
                <label htmlFor="" className="fw-semibold m-1">
                  Name
                </label>
                <div
                  className="rounded-pill shadow p-2"
                  style={{ width: "300px" }}
                >
                  <FaUser className=" mx-3" />
                  <input
                    type="text"
                    name="name"
                    onChange={handlechange}
                    placeholder="Enter your name"
                    style={{ width: "50%", border: "none", outline: "none" }}
                  />
                </div>
                {err.name && (
                  <p style={{ color: "red", marginLeft: "10px" }}>{err.name}</p>
                )}
              </div>

              <div className=" col ">
                <label htmlFor="" className="fw-semibold m-1">
                  Email
                </label>
                <div
                  className="rounded-pill shadow p-2"
                  style={{ width: "300px" }}
                >
                  <IoMdMail className="mx-3" style={{ fontSize: "20px" }} />
                  <input
                    type="email"
                    name="email"
                    onChange={handlechange}
                    placeholder="Enter your email"
                    style={{ width: "50%", border: "none", outline: "none" }}
                  />
                </div>
                {err.email && (
                  <p style={{ color: "red", marginLeft: "10px" }}>
                    {err.email}
                  </p>
                )}
              </div>
            </div>

            <div className="row justify-content-around mb-2">
              <div className=" col">
                <label htmlFor="" className="fw-semibold m-1">
                  Phone Number
                </label>
                <div
                  className="rounded-pill shadow p-2"
                  style={{ width: "300px" }}
                >
                  <FaPhoneAlt className=" mx-3" />
                  <input
                    type="number"
                    name="number"
                    onChange={handlechange}
                    placeholder="phone number"
                    style={{ width: "50%", border: "none", outline: "none" }}
                  />
                </div>
                {err.number && (
                  <p style={{ color: "red", marginLeft: "10px" }}>
                    {err.number}
                  </p>
                )}
              </div>

              <div className="col">
                <label htmlFor="" className="fw-semibold m-1">
                  Password
                </label>
                <div
                  className="rounded-pill shadow p-2"
                  style={{ width: "300px" }}
                >
                  <FaKey className="mx-3" style={{ fontSize: "20px" }} />
                  <input
                    type="text"
                    name="password"
                    onChange={handlechange}
                    placeholder="password"
                    style={{ width: "50%", border: "none", outline: "none" }}
                  />
                </div>
                {err.password && (
                  <p style={{ color: "red", marginLeft: "10px" }}>
                    {err.password}
                  </p>
                )}
              </div>
            </div>

            <div className="row justify-content-around mb-2">
              <div className=" col">
                <label htmlFor="" className="fw-semibold m-1">
                  DOB
                </label>
                <div
                  className="rounded-pill shadow p-2"
                  style={{ width: "300px" }}
                >
                  <BsFillCalendarDateFill className=" mx-3" />
                  <input
                    type="date"
                    name="date"
                    onChange={handlechange}
                    placeholder="Enter your name"
                    style={{ width: "50%", border: "none", outline: "none" }}
                  />
                </div>
                {err.date && (
                  <p style={{ color: "red", marginLeft: "10px" }}>{err.date}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="" className="fw-semibold m-1">
                  Select Range
                </label>
                <div
                  className="rounded-pill shadow p-2"
                  style={{ width: "300px" }}
                >
                  <input
                    type="range"
                    name="range"
                    onChange={handlechange}
                    placeholder="Enter your name"
                    style={{ width: "100%", border: "none", outline: "none" }}
                  />
                </div>
                {err.range && (
                  <p style={{ color: "red", marginLeft: "10px" }}>
                    {err.range}
                  </p>
                )}
              </div>
            </div>

            <div className="row justify-content-around mb-2">
              <label htmlFor="" className="fw-semibold m-1">
                Gender
              </label>

              <div className="col">
                <input
                  type="radio"
                  name="radio"
                  value="f"
                  className="m-2"
                  onChange={handlechange}
                />
                <label htmlFor="">Female</label>
              </div>

              <div className="col">
                <input
                  type="radio"
                  name="radio"
                  value="m"
                  className="m-2"
                  onChange={handlechange}
                />
                <label htmlFor="">Male</label>
              </div>

              <div className="col">
                <input
                  type="radio"
                  name="radio"
                  value="o"
                  className="m-2"
                  onChange={handlechange}
                />
                <label htmlFor="">Other</label>
              </div>
              {err.radio && (
                <p style={{ color: "red", marginLeft: "10px" }}>{err.radio}</p>
              )}
            </div>

            <div className="row justify-content-around mb-2">
              <label htmlFor="" className="fw-semibold m-1">
                Message
              </label>
              <div className="col">
                <textarea
                  type="text"
                  name="textarea"
                  onChange={handlechange}
                  id=""
                  style={{ width: "100%", height: "130px" }}
                ></textarea>
              </div>
              {err.textarea && (
                <p style={{ color: "red", marginLeft: "10px" }}>
                  {err.textarea}
                </p>
              )}
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                onChange={handlechange}
                type="checkbox"
                name="checkbox"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I read and agree to Teams & Conditions
              </label>
            </div>
            {err.checkbox && (
              <p style={{ color: "red", marginLeft: "10px" }}>{err.checkbox}</p>
            )}

            <div className="text-center d-grid col-6 mx-auto">
              <button
                className="submitbtn btn mt-5"
                onClick={submitclick}
                style={{ backgroundColor: "#090979", color: "white" }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="bgcolor col rounded-start-5">
            <div className="para ">
              <h1 className="text-white fs-1 text-center mt-5">Hello World</h1>
              <p className="p-4 text-white text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                facere non modi doloremque dolor, repellendus quo aperiam,
                voluptatibus eaque, fuga neque temporibus. Assumenda ullam
                consectetur libero provident esse totam corporis. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. A facere non modi
                doloremque dolor, repellendus quo aperiam, voluptatibus eaque,
                fuga neque temporibus. Assumenda ullam consectetur libero
                provident esse totam corporis.Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. A facere non modi doloremque
                dolor, repellendus quo aperiam, voluptatibus eaque, fuga neque
                temporibus. Assumenda ullam consectetur libero provident esse
                totam corporis. orem ipsum, dolor sit amet consectetur
                adipisicing elit. A facere non modi doloremque dolor,
                repellendus quo aperiam, voluptatibus eaque, fuga neque
                temporibus. Assumenda ullam consectetur libero provident esse
                totam corporis. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. A facere non modi doloremque dolor,
                repellendus quo aperiam, voluptatibus eaque, fuga neque
                temporibus. Assumenda ullam consectetur libero provident esse
                totam corporis.
              </p>

              <div className="text-center d-grid col-6 mx-auto">
                <button
                  className="submitbtn btn m-4"
                  style={{ backgroundColor: "#090979", color: "white" }}
                >
                  Let's Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">Phone Number</th>
             <th scope="col">Password</th>
             <th scope="col">DOB</th>
             <th scope="col">Range</th>
             <th scope="col">Gender</th>
             <th scope="col">Message</th>
             <th scope="col">checkbox</th>
          </tr>
          
        </thead>
     
      <tbody >
        {arr.map((e)=> {
          return(
          <tr>
            {/* <th scope="row"></th> */}
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.number}</td>
            <td>{e.password}</td>
            <td>{e.date}</td>
            <td>{e.range}</td>
            <td>{e.radio}</td>
            <td>{e.textarea}</td>
            <td>{e.checkbox}</td>
          </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  );
};

export default Login2;
