import React, { useEffect, useState, useRef, useCallback } from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

import useWindowDimensions from "../windowDimention";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const CSearch = ({
  title = "",
  val = "",
  hidden = false,
  barClaass,
  setVal = () => {
    console.log("not found");
  },
}) => {
  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    height > width && setMobile(true);
  }, [height]);

  return (
    <>
      <div className={[styles?.search, barClaass].join(" ")}>
        <input
          placeholder={`Search ${title}`}
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <a
          onClick={() => {
            val?.length > 0 && setVal("");
          }}
        >
          <FontAwesomeIcon
            icon={val?.length > 0 ? faXmark : faMagnifyingGlass}
            color={"black"}
            style={{
              height: "2.5vh",
              marginRight: "1.5vw",
            }}
          />
        </a>
      </div>
    </>
  );
};

export default CSearch;
