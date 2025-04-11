/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mycontext } from "./utils/Myprovider";
import App from "../App";

function Login() {
    const { isLoggedin, setIsloggedin } = useContext(Mycontext);
    const navigate = useNavigate();
    const loggeduser = localStorage.getItem("loggedin");

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required")
                .min(3, "Must be at least 3 characters"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Must be at least 6 characters")
        }),
        onSubmit: (values) => {
            localStorage.setItem("Name", JSON.stringify(values.username));
            localStorage.setItem("loggedin", true);
            setIsloggedin(true);
            navigate("/home");
        }
    });

    return (
        loggeduser=="false" ? (
            <div className="flex items-center justify-center p-2">
                <form onSubmit={formik.handleSubmit} className="m-auto">
                    <label htmlFor="username">Enter Username</label>
                    <br />
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="outline-1 border border-gray-300 p-1"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="text-red-500 text-sm">{formik.errors.username}</div>
                    )}
                    <br />
                    <label htmlFor="password">Enter Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="outline-1 border border-gray-300 p-1"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                    )}
                    <br />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-1 rounded-full mt-2 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        ) : <App />
    );
}

export default Login;
