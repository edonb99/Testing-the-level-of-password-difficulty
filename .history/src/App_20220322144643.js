import React, { useState } from "react";
import GeneratePass from "./components/GeneratePass";
import PasswordChecker from "./components/PasswordChecker";
import Sidebar from "./components/Sidebar";
import Algoritmi from "./components/Algoritmi";
const App = () => {
  const [userInfo, setuserInfo] = useState({
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const [isError, setError] = useState(null);
  const handleChangePassword = (e) => {
    let password = e.target.value;
    setuserInfo({
      ...userInfo,
      password: e.target.value,
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount;
    if (password.length < 6) {
      setError(
        "Fjalëkalimi duhet të ketë së paku 6 karaktere duke përfshirë një shkronjë të madhe, të vogël, një numër dhe simbol"
      );
      return;
    } else {
      capsCount = (password.match(/[A-Z]/g) || []).length;
      smallCount = (password.match(/[a-z]/g) || []).length;
      numberCount = (password.match(/[0-9]/g) || []).length;
      symbolCount = (password.match(/\W/g) || []).length;

      if (capsCount < 1) {
        setError("Duhet të ketë së paku një shkronjë të madhe");
        return;
      } else if (smallCount < 1) {
        setError("Duhet të ketë së paku një shkronjë të vogël");
        return;
      } else if (numberCount < 1) {
        setError("Duhet të ketë së paku një numër");
        return;
      } else if (symbolCount < 1) {
        setError("Duhet të ketë së paku një karakter special");
        return;
      }
    }
  };

  const [isStrength, setStrength] = useState(null);
  const dataHandler = async (childData) => {
    setStrength(childData);
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      console.log(userInfo.password);
    } catch (error) {
      throw error;
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex flex-col w-full md:h-screen md:flex-row md:space-x-60">
      <Sidebar />

      <div className="flex flex-col justify-between m-0">
        <h1 className="p-2 m-0 text-2xl font-bold text-center text-gray-700 md:text-4xl">
          Testimi i nivelit të vështirësisë së fjalëkalimit
        </h1>

        <Algoritmi />
        <div className="box-border m-0 bg-white">
          <div className="max-w-4xl mx-auto my-0 text-center bg-gray-100 rounded-sm shadow-xl ">
            <div className="flex flex-col items-center justify-between px-0">
              <form
                onSubmit={onSubmit}
                className="flex flex-col items-stretch w-4/5 px-0 pt-2 pb-4 md:w-2/3"
              >
                <label
                  className="flex w-full h-12 mb-3 text-sm font-semibold md:text-base"
                  htmlFor="password"
                >
                  {isError !== null && (
                    <p className="text-left text-red-600 "> {isError}</p>
                  )}
                </label>
                <h3 className="text-base font-normal md:text-xl md:font-semibold">
                  Shëno fjalëkalimin:{" "}
                </h3>
                <div className="flex flex-row space-x-2">
                  <input
                    className="w-full p-4 text-xl bg-white border-2 border-gray-500 border-solid rounded-lg shadow-lg h-11 md:h-11 "
                    type={passwordShown ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={handleChangePassword}
                    required
                  />
                  <button onClick={togglePassword}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 hover:stroke-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={togglePassword}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
                <PasswordChecker
                  password={userInfo.password}
                  actions={dataHandler}
                />
                {isStrength === "Strong" && (
                  <button
                    type="submit"
                    className="h-10 py-2 text-lg text-white border-0 rounded-lg outline-none bg-gradient-to-br from-gray-300 to-gray-900 px-7"
                  >
                    Fjalëkalimi në rregull{" "}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <GeneratePass />
      </div>
    </div>
  );
};
export default App;
