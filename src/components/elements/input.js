
import React, { useEffect, useState, useRef, useCallback } from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

import useWindowDimensions from "../windowDimention";

const CInput = ({
  max = null,
  inputType = "text",
  hidden = false,
  val,
  setVal,
  title = "",
  flexClass,
  inputClass,
  placeholder
}) => {
  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  const [signUpError, setSignUpError] = useState(false);
  const [signUpErrorMSG, setSignUpErrorMSG] = useState("Can't sign up now.");

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    height > width && setMobile(true);
  }, [height]);

  return (
    <>
      <div className={[styles?.container, flexClass].join(" ")}>
        {title?.length > 0 && <p>{title} :</p>}
        <input
          maxLength={max == null ? 99999999999 : max}
          inputMode={inputType}
          className={[styles?.inputNow, inputClass].join(" ")}
          placeholder={placeholder ?? `Enter ${title}`}
          type={hidden ? "password" : "text"}
          value={val}
          onChange={(e) => {
            if (max != null) {
              if (e.target.value.length > max) {
                return;
              }
            }
            inputType == "number"
              ? setVal(e.target.value.replace(/\D/g, ""))
              : setVal(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default CInput;
