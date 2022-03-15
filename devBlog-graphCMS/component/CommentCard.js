import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

export default function CommentCard({ slug }) {
  const [comments, allComments] = useState([]);

  useEffect(async () => {
    //  getComments(slug).then((result) => {
    //    console.log(result);
    //    setComments(result);
    //  });
    try {
      const res = await getComments(slug);
      console.log(res);
      // setComments(res);
      allComments(res)
    } catch (err) {
      console.log(err);
    }
  }, [slug]);

  return (
    comments.length > 0 && (
      <div className={styles.commentsCard}>
        <h3>{comments.length} Comments</h3>
        <hr />

        {comments.map((com,ind) => (
          <div className={styles.comments} key={ind}>
            <h4>
              {com.name} on{" "}
              <span>{moment(com.createdAt).format("MMM DD,YYYY")}</span>
            </h4>
            {/* <p>{parse(com.comment)}</p> */}
            <p>{com.comment}</p>
          </div>
        ))}
      </div>
    )
  );
}
