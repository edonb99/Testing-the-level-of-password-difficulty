import React from 'react';
import './password.css'
const Password = (props) => {

  const {password} = props;

  const testedResult = password;
  const createPasswordLabel = () => {
    let score = 0
    let regexPositive = ["[A-Z]","[a-z]","[0-9]","\\W",]
    regexPositive.forEach((regex, index) => {
      if (new RegExp(regex).test(testedResult)) {
        score +=1
      }
    })
    switch (score) {
      case 0:
        return ({
          value: 0,
          info: "",
        });
      case 1:
        return ({
          value: 1,
          info: "Weak",
        });
      case 2:
        return ({
          value: 2,
          info: "Fair",
        });
      case 3:
        return ({
          value: 3,
          info: "Good",
        });
      case 4:
        return ({
          value: 4,
          info: "Strong",
        });
      default:
        return null
    }
  }
  {props.actions(createPasswordLabel().info)}
  
  return (
    <div className="password-strength-meter w-full ">
      <progress className={`password-strength-meter-progress strength-${createPasswordLabel().info}`} 
      value={createPasswordLabel().value} max="4" />
      <br />
      <p className="text-base">

        {password && (
          <p className={`text-center text-xl font-medium password__label strength-${createPasswordLabel().info}`}>
          Fuqia e fjalëkalimit: <span>{createPasswordLabel().info} </span></p> 
        )}
      </p>
    </div>
   )
  }
export default Password;
