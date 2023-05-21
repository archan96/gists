import React, { useEffect, useState, useRef, useCallback } from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

import useWindowDimensions from "../windowDimention";

const CButton = ({submit, btnStyle, shadow = true, title = "Submit" }) => {
  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    height > width && setMobile(true);
  }, [height]);

  return (
    <>
      <button
        onClick={() => {
          submit();
        }}
        className={[styles?.btn, btnStyle, shadow && styles?.shadow].join(" ")}
      >
        <p>{title ?? "Submit"}</p>
      </button>
    </>
  );
};

export default CButton;
