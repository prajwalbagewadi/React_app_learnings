import React, { useState, useEffect } from "react";

function Message() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="bg-black text-white text-center font-mono font-bold text-2xl color-blue-500">
      <h1>helloWorld! from React.</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default Message;
