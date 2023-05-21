import React, { useEffect, useState, useRef, useCallback } from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

import useWindowDimensions from "../windowDimention";

const CSwitch = (props) => {
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
          props?.onChange(!props?.val);
        }}
        className={[styles?.switch].join(" ")}
      >
        <p>{props?.title || "Submit"}</p>
        <div
          style={{
            backgroundColor: "lightgrey",
          }}
          className={styles?.toggle}
        >
          <div
            className={[styles?.tCircle, props?.val && styles?.active].join(
              " "
            )}
          ></div>
        </div>
      </button>
    </>
  );
};

export default CSwitch;
