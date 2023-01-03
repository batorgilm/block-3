import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();

  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const fetchData = async () => {
    const res = await instance.get("users");
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = async () => {
    await instance
      .post("users", {
        firstname: firstNameInputRef.current.value,
        lastname: lastNameInputRef.current.value,
        email: emailInputRef.current.value,
      })
      .catch((e) => toast(e.response.data.data));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <input ref={firstNameInputRef} type="text" placeholder="Ner" />
      <input ref={lastNameInputRef} type="text" placeholder="owog" />
      <input ref={emailInputRef} type="email" />
      <button onClick={clickHandler}>Submit</button>
      <ToastContainer />
    </div>
  );
}

export default App;
