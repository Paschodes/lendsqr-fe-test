import styles from "./styles.module.scss";
import { Errors, FormData } from "../../interface/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/Forms/Input";
import PasswordInput from "../../component/Forms/PasswordInput";
import FormGroup from "../../component/Forms/FormGroup";
import Button from "../../component/Forms/Button";
import signin from "../../assets/signin.png";
import logo from "../../assets/logo.svg";
import { PublicPaths } from "../../routes/path";

const initial: Errors = {
  email: "",
  password: "",
};

const initialFormData: FormData = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Errors>(initial);
  const handleChange = (
    name: string,
    value: string | boolean | { required?: boolean; value: any }
  ) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name: string, error: string) => {
    setErrors({ ...errors, [name]: error });
  };

  const submitHandler = () => {
    formData;
    navigate(PublicPaths.USERS);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.images}>
        <img src={logo} alt="logo" className={styles.logo} />
        <img src={signin} alt="img" />
      </div>
      <div className={styles.loginRight}>
        <div className={styles.nameContainer}>
          <h1>Welcome!</h1>
          <p>Enter details login</p>
        </div>
        <FormGroup
          errors={errors}
          setErrors={setErrors}
          validation={formData}
          onSubmit={submitHandler}
        >
          <div className={styles.inputDivs}>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required={false}
              validationHandler={validationHandler}
              size="large"
              placeholder="Email"
              className={styles.logInput}
            />
            <PasswordInput
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required={false}
              validationHandler={validationHandler}
              size="large"
              placeholder="Password"
              className={styles.logInput}
            />
            <div className={styles.caption}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <Button
              type="submit"
              title="Login"
              className={styles.loginBtn}
              size="large"
            />
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Login;
