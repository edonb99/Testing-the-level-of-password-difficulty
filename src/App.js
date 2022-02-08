import React, { useState } from 'react';
import GeneratePass from './components/GeneratePass';
import PasswordChecker from './components/PasswordChecker';
import Sidebar from './components/Sidebar';
import Algoritmi from './components/Algoritmi';
const App = () => {
  const [userInfo, setuserInfo] = useState({
    password: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const [isError, setError] = useState(null);
  const handleChangePassword = (e) => {
    let password = e.target.value;
    setuserInfo({
      ...userInfo,
      password: e.target.value
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount
    if (password.length < 6) {
      setError("Fjalëkalimi duhet të ketë së paku 6 karaktere duke përfshirë një shkronjë të madhe, të vogël, një numër dhe simbol");
      return;
    }
    else {
      capsCount = (password.match(/[A-Z]/g) || []).length
      smallCount = (password.match(/[a-z]/g) || []).length
      numberCount = (password.match(/[0-9]/g) || []).length
      symbolCount = (password.match(/\W/g) || []).length

      if (capsCount < 1) {
        setError("Duhet të ketë së paku një shkronjë të madhe");
        return;
      }
      else if (smallCount < 1) {
        setError("Duhet të ketë së paku një shkronjë të vogël");
        return;
      }
      else if (numberCount < 1) {
        setError("Duhet të ketë së paku një numër");
        return;
      }
      else if (symbolCount < 1) {
        setError("Duhet të ketë së paku një karakter special");
        return;
      }
    }
  }

  const [isStrength, setStrength] = useState(null);
  const dataHandler = async (childData) => {
    setStrength(childData);
  }

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      console.log(userInfo.password);
    } catch (error) { throw error; }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="h-screen flex flex-row space-x-60">
      <Sidebar />
      
      <div className="flex flex-col m-0 justify-between">
        <h1 className="font-bold text-center p-2 m-0 text-4xl text-gray-700">
          Testimi i nivelit të vështirësisë së fjalëkalimit</h1>

        <Algoritmi />
        <div className="box-border m-0 bg-white">
          <div className=" max-w-4xl my-0 mx-auto bg-gray-100 shadow-xl rounded-sm text-center ">
            <div className="flex justify-between  px-0 flex-col items-center">
              <form onSubmit={onSubmit} className="flex flex-col items-stretch pt-2 px-0 pb-4 w-2/3">
                <label className=" text-lg mb-3 flex font-semibold " htmlFor="password">
                  {isError !== null && (
                    <p className="text-red-600 text-left ">  {isError}</p>
                  )}
                </label>
                <h3>Shëno fjalëkalimin: </h3>
                <div className="flex flex-row space-x-2">
                  <input className="w-full h-14 text-xl border-2 border-solid border-gray-500 bg-white 
          p-4 rounded-lg shadow-lg " type={passwordShown ? "text" : "password"} id="password" name="password"
                    onChange={handleChangePassword} required />
                  <button onClick={togglePassword} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={togglePassword} >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
                <PasswordChecker password={userInfo.password} actions={dataHandler} />
                {/*
          {isStrength === 'Strong' && 
            <button type="submit" className=" outline-none h-10 bg-gradient-to-br 
            from-gray-300 to-gray-900 border-0 py-2 px-7 text-white text-lg rounded-lg "  >
             Fjalëkalimi në rregull </button>
          }
        */}
              </form>
            </div>
          </div>
        </div>
        <GeneratePass />
      </div>
    </div>
  )
}
export default App
