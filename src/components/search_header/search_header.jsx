import styles from "./search_header.module.css";
import React, { useRef } from "react";
import {
  faVideo,
  faBell,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo.png";
import Search from "./search.png";

const SearchHeader = ({ onSearch, mostPopular }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value !== "") {
      onSearch(value);
    } else {
      mostPopular();
    }
  };
  const onHome = () => {
    handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/youtube" onClick={onHome}>
          <img src={Logo} alt="logo" />
        </a>
        <h1 className={styles.title}>
          <a href="/youtube" onClick={onHome}>
            Youtube
          </a>
        </h1>
      </div>
      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img className={styles.buttonImg} src={Search} alt="search" />
        </button>
      </div>
      <div className={styles.iconsContainer}>
        <a href="#" title="설정">
          <FontAwesomeIcon icon={faEllipsisV} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faVideo} />
        </a>
      </div>
    </header>
  );
};

export default SearchHeader;
