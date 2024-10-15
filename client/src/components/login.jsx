import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, contact };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log("My API success", response.data);
        // setResponseMessage("Form submit successfully!")
        toast.success("Happy Coding!")
        setName("");
        setEmail("");
        setContact("")
      })
      .catch((error) => {
        console.log("Given an Error", error);
        toast.error("Failed Fuck!")
        // setResponseMessage("Form failed")

      });
  };

  return (
    <>
    <ToastContainer/>
      <div className="w-[30%] mx-auto container grid grid-cols-1">
        <input
          type="text"
          placeholder="Name"
          className=" p-2 pl-2 border mt-6 hover:border-customBlue-light"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className=" p-2 pl-2 border mt-6 hover:border-customBlue-light"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          className=" p-2 pl-2 border mt-6 hover:border-customBlue-light"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <div
          onClick={handleSubmit}
          className="border p-3 w-[120px] mt-3 mx-auto flex justify-center items-center hover:bg-customBlue-light hover:text-white"
        >
          <button>Submit</button>
        </div>

        {/* {responseMessage && <p>{responseMessage}</p>} */}
      </div>
    </>
  );
}

export default Login;
