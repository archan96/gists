import styles from "./elements.module.css";

const CTitle = ({ children, className }) => {
  return <p className={[styles?.titleC, className].join(" ")}>{children}</p>;
};


export default CTitle;