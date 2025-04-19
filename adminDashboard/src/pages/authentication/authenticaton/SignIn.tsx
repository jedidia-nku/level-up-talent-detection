import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { useFormik } from "formik";
// import { loginValidationSchema } from "../../validations/authValidations/AuthValidation";
// import LoginRightSide from "../../components/loginRightSIde/LoginRightSide";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const formik = useFormik({
  //   initialValues: { email: "", password: "" },
    // validationSchema: loginValidationSchema,
    // onSubmit: () => {
      // loginMutation.mutate(values);
  //   },
  // });

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/2">
        <div className="p-4">
            <img src="logo.png" alt="Logo" className="w-[180px]" />
          </div>
          <div className="flex justify-center items-center">
          <div className="bg-[#FFFFFF] py-8 px-6 rounded-2xl w-[90%] md:w-[60%] font-DMSans">
            <h2 className="text-[#1F2937] text-3xl font-bold mb-2 font-Montserrat">Login</h2>

            <form  className="space-y-2">
              <div>
                <label className="text-[#263A43] font-semibold block mb-5">User name</label>
                <input
                name="text"
                type="text"
                className="border border-[#B1B1B1] border-b-4 border-b-[#D44639] rounded-lg px-6 py-6 mb-5 text-sm w-full outline-none bg-white" 
                placeholder="Username" 
                 />
                
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="text-[#263A43] font-semibold block mb-5">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Type your password here"
                    className="w-full px-6 py-6 mb-5 rounded-lg bg-[#FFFFFF] text-[#141519] border border-[#B1B1B1] focus:outline-none"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.password}
                  />
                  <span
                    className="absolute inset-y-0 right-4 bottom-4 flex items-center text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEye className="text-[#292B33] lg:text-xl" /> : <FiEyeOff className="text-[#292B33]  lg:text-xl" />}
                  </span>
                </div>
                {/* {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )} */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0081FB] font-inter text-[#FFFFFF] px-4 py-2 lg:px-6 lg:py-6 rounded-md"
              >
                LogIn
              </button>
            </form>
          </div>
          </div>
        </div>
        
        <div className="hidden lg:block w-1/2">
          {/* <LoginRightSide /> */}
        </div>
      </div>
    </>
  );
};

export default SignIn;
