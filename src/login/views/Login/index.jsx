import { useState } from "react";

const LoginView = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (evento) => {
    evento.preventDefault();
    console.log("Login");
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleFormChange = (evento) => {
    const inputName = evento.target.name;
    const inputValue = evento.target.value;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Welcome to the Login page</p>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleFormChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginView.propTypes = {};

export default LoginView;
