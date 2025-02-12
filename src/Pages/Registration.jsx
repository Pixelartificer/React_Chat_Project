import React, {useState} from "react";
import Registratio from "../assets/Auth/Registration.jpg";
import { registrationInputData } from "../Library/Registration";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setpassword] = useState("");
  const item = registrationInputData();

  /**
   * Todo: handleInput functing implement
   * @abstract({event)}
   * return: null
   */

  const handleInput = (event) => {
    const { name, value } = event.target;
  };

  return (
    <div className="">
      <div className="flex">
        <div className="w-[60%]">
          <div className=" flex h-full items-center justify-center">
            <div>
              <h1>Get started with easily register</h1>
              <p>Free register and you can enjoy it</p>
              {item?.map((item) => (
                <div className="flex flex-col ">
                  <label htmlFor="#">
                    Your {item.name} <span className="text-red-700">*</span>
                  </label>
                  <input
                    type={
                      item.name.toLocaleLowerCase() ==
                      "E-mail".toLocaleLowerCase()
                        ? "E-mail"
                        : item.name == "Full Name"
                        ? "text"
                        : "Password"
                    }
                    className="py-2 px-3 border border-r-gray-500 rounded"
                    placeholder={`Enter your ${item.name}`}
                    name={item.name}
                    obChange={handleInput}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <img src={Registratio} alt={Registratio} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
