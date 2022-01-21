import React,{useState} from 'react';
import Password from './components/Password';

const App = () => {
  const [userInfo, setuserInfo] = useState({
    password: '',
  });

  const [isError, setError] = useState(null);
  const handleChangePassword = (e) => {
    let password  = e.target.value;
    setuserInfo({
      ...userInfo,
      password:e.target.value
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount
    //if (password.length < 4) {
      if (password.length < 6 || (password.match(/(.)\1{2,}/) || []).length) {
 //   setError("Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &");
      setError("Fjalëkalimi duhet të ketë së paku 4 karaktere duke përfshirë një shkronjë të madhe, të vogël, një numër dhe karaktere speciale: @$! % * ? &");
      return;
    }
    else {
      capsCount = (password.match(/[A-Z]/g) || []).length
      smallCount = (password.match(/[a-z]/g) || []).length
      numberCount = (password.match(/[0-9]/g) || []).length
      symbolCount = (password.match(/\W/g) || []).length
      if (capsCount < 1) {
        // setError("Must contain one UPPERCASE letter");
        setError("Duhet të ketë së paku një shkronjë të madhe");
        return;
      }
      else if (smallCount < 1) {
        // setError("Must contain one lowercase letter");
        setError("Duhet të ketë së paku një shkronjë të vogël");
        return;
      }
      else if (numberCount < 1) {
        // setError("Must contain one number");
        setError("Duhet të ketë së paku një numër");
        return;
      }
      else if (symbolCount < 1) {
        // setError("Must contain one special character: @$! % * ? &");
        setError("Duhet të ketë së paku një karakter special: @$! % * ? &");
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
    } catch (error) { throw error;} 
  };

  return (
    <div className="box-border m-0 p-14 bg-white">
    <div className=" max-w-4xl my-0 mx-auto bg-white p-5 shadow-lg rounded-sm text-center ">
      <h1 className=" bg-white text-center p-5 m-0 text-2xl ">Testimi i nivelit të vështirësisë së fjalëkalimit</h1>
      <div className="flex justify-between py-5 px-0 flex-col items-center">
        <form onSubmit={onSubmit} className="flex flex-col items-stretch pt-7 px-0 pb-4 ">
          <label className=" text-lg mb-3 flex font-semibold " htmlFor="password">
            Password 
            {isError !== null && (
              <p className=" text-red-600 mt-0 mr-0 mb-2 ml-4 max-w-sm text-left "> - {isError}</p>
            )}
          </label>
          <input className=" w-auto h-14 text-xl border-2 border-solid border-white bg-white p-4 rounded-lg shadow-lg " type="password" id="password" name="password" onChange={handleChangePassword} required />
          <Password password={userInfo.password} actions={dataHandler}/>
          {isStrength === 'Strong' && 
            <button type="submit" className=" outline-none h-14 bg-gradient-to-r from-yellow-500 to-red-500 border-0 py-4 px-7 text-white text-lg rounded-lg "  > Fjalëkalimi në rregull </button>
          }
        </form>
      </div>
    </div>
    </div>
  )
}
export default App
