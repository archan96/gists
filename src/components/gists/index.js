import React, { useEffect, useState, useRef, useCallback } from "react";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

import useWindowDimensions from "@/components/windowDimention";

import styles from "./gists.module.css";

import { useRouter } from "next/router";
import { getForks } from "@/controllers/handleQueries";

const Gists = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  const [signUpError, setSignUpError] = useState(false);
  const [signUpErrorMSG, setSignUpErrorMSG] = useState("Can't sign up now.");
  const router = useRouter();

  const [mobile, setMobile] = useState(false);

  const [forks, setForks] = useState([]);

  useEffect(() => {
    height > width && setMobile(true);
  }, [height]);

  useEffect(() => {
    getForksNow();
  }, []);

  const getForksNow = async () => {
    let data = await getForks(item?.id);
    console.log(data, "forks");
    setForks(data?.slice(0, 3));
  };

  return (
    <>
      <div className={styles?.container}>
        <div className={styles?.badge}>
          <p>{Object.values(item?.files)[0]?.language}</p>
        </div>
        <p>{Object.keys(item?.files)[0]}</p>

        <p>{item?.description}</p>
        {forks?.length > 0 && <p>Forks: </p>}
        {forks?.map((i, index) => {
          return (
            <a
              target="_blank"
              href={`${i?.html_url}`}
              rel="noopener noreferrer"
              key={index}
            >
              <div className={styles?.forks}>
                <img src={i?.owner?.avatar_url} />
                <p>@{i?.owner?.login} </p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Gists;
