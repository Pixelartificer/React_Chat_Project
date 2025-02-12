import React, { useState } from "react";
import Registratio from "../assets/Auth/Registration.jpg";
import { registrationInputData } from "../Library/Registration";
import { FaEye } from "react-icons/fa";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setpassword] = useState("");
  const [eye, seteye] = useState(false)
  const item = registrationInputData();

  /**
   * Todo: handleInput functing implement
   * @abstract({event)}
   * return: null
   */

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name == "fullName") {
      setfullName(value);
    } else {
      setpassword(value);
    }
  };

/**
 * todo: handleye function implement
 * @param()
 */

const handleye = ()=>{
  seteye(!eye);
}

  return (
    <div className="">
      <div className="flex">
        <div className="w-[50%]">
          <div className=" flex h-full items-center justify-center">
            <div>
              <h1>Get started with easily register</h1>
              <p>Free register and you can enjoy it</p>

              {item?.map((item) =>
                item.name == "password" ? (
                  <div className="flex flex-col gap-y-2 relative">
                    <label htmlFor="#">
                      Your {item.name} <span className="text-red-700">*</span>
                    </label>
                    <input
                      type={eye ? "text" : "password"}
                      className="py-2 px-3 border border-r-gray-500 rounded"
                      placeholder={`Enter your ${item.name}`}
                      name={item.name}
                      obChange={handleInput}
                    />
                    <span className="absolute top-[60%] right-[12px] cursor-pointer" onClick={handleye}>
                      <FaEye />
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="#">
                      Your {item.name} <span className="text-red-700">*</span>
                    </label>
                    <input
                      type={
                        item.name.toLocaleLowerCase() ==
                        "email".toLocaleLowerCase()
                          ? "email"
                          : item.name == "fullName"
                          ? "text"
                          : "password"
                      }
                      className="py-2 px-3 border border-r-gray-500 rounded"
                      placeholder={`Enter your ${item.name}`}
                      name={item.name}
                      obChange={handleInput}
                    />
                  </div>
                )
              )}
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
