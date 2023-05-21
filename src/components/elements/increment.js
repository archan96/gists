import { Colors } from "@/components/styled";
import React, { useEffect, useState, useRef, useCallback } from "react";

import Head from "next/head";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

import useWindowDimensions from "@/components/windowDimention";
import { DebounceInput } from "react-debounce-input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./elements.module.css";

import { useRouter } from "next/router";
import { withSessionSsr } from "@/config/withSession";

import { useSelector } from "react-redux";

import { selectUser } from "@/store/reducers/user";

const CIncrement = ({ val, update, title = "", min = 0, max = 99999999, btnColor = "#f21a0c", btnheight = "2.5vh" }) => {
  const user = useSelector(selectUser);

  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  const [signUpError, setSignUpError] = useState(false);
  const [signUpErrorMSG, setSignUpErrorMSG] = useState("Can't sign up now.");
  const router = useRouter();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    height > width && setMobile(true);
  }, [height]);

  useEffect(() => {
    // console.log(user?.payload?.user?.value, "this one");
    setUserrNow(user);
  }, [user]);

  return (
    <>
      <div className={[styles?.increment].join(" ")}>
        {title?.length > 0 && <p className={styles?.title}>{title}</p>}
        <button
          onClick={() => {
            let valNow = val - 1;
            valNow >= min && update(valNow);
          }}
        >
          <FontAwesomeIcon
            icon={faMinusCircle}
            color={Colors?.blue}
            style={{
              height: btnheight,
            }}
          />
        </button>
        <p>{val}</p>
        <button
          onClick={() => {
            let valNow = val + 1;
            valNow <= max && update(valNow);
          }}
        >
          <FontAwesomeIcon
            icon={faPlusCircle}
            color={{btnColor}}
            style={{
              height: btnheight,
            }}
          />
        </button>
      </div>
    </>
  );
};

export default CIncrement;
