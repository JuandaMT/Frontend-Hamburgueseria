import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const { isSuccess, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
      navigate("/login");
    }
  }, [isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      return notification.error({
        message: "Error",

        description: "Passwords do not match",
      });
    } else {
      return dispatch(register(formData));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="email" value={email} onChange={onChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
