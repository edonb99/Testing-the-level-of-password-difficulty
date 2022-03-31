import React from "react";
import "../styles/password.css";
const PasswordStrength = (props) => {
  const { password } = props;

  const testedResult = password;
  const createPasswordLabel = () => {
    let score = 0;
    let regexPositive = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    regexPositive.forEach((regex, index) => {
      if (new RegExp(regex).test(testedResult)) {
        score += 1;
      }
    });
    switch (score) {
      case 0:
        return {
          value: 0,
          info: "",
        };
      case 1:
        return {
          value: 1,
          info: "Dobët",
        };
      case 2:
        return {
          value: 2,
          info: "Mirë",
        };
      case 3:
        return {
          value: 3,
          info: "ShumëMirë",
        };
      case 4:
        return {
          value: 4,
          info: "Fuqishëm",
        };
      default:
        return null;
    }
  };
  {
    props.actions(createPasswordLabel().info);
  }

  return (
    <div className="w-full h-12 password-strength-meter ">
      <progress
        className={`password-strength-meter-progress strength-${
          createPasswordLabel().info
        }`}
        value={createPasswordLabel().value}
        max="4"
      />
      <br />
      <p className="text-base">
      
        {password && (
          <p

            className={`text-center text-base  md:text-xl font-medium password__label strength-${
              createPasswordLabel().info
            }`}
          >
            Fuqia e fjalëkalimit: <span>{createPasswordLabel().info} </span>
          </p>
        )}

      </p>
    </div>
  );
};
export default PasswordChecker;
