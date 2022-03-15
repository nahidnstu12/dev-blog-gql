import React, { useState,useEffect } from "react";
import { submitComment } from "../services";
import styles from "../styles/Home.module.scss";

export default function CommentsForm({slug}) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className={styles.commentsCard}>
      <h3>Leave A Replay</h3>
      <div className={styles.comments_form}>
        <textarea
          name="comment"
          rows={6}
          className={styles.msg}
          placeholder="Leave Your Message"
          value={formData.comment}
          onChange={onInputChange}
        ></textarea>
        <div className={styles.nameCard}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={onInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Your Email"
            value={formData.email}
            onChange={onInputChange}
            name="email"
          />
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={formData.storeData}
            onChange={onInputChange}
            id="storeData"
            name="storeData"
            value={true}
          />
          <label htmlFor="storeData">
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
        {error && <p className={"errorMsg"}>All fields are mandatory</p>}
        <button onClick={handlePostSubmission}>Post Message</button>
        {showSuccessMessage && (
          <span className={styles.successMsg}>Comment submitted for review</span>
        )}
      </div>
    </div>
  );
}
