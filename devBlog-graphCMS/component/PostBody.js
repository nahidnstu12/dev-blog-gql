import React from "react";
import moment from "moment";
import styles from "../styles/Home.module.scss";
export default function PostBody({post}) {
    const getContentFragment = (index, text, obj, type) => {
      let modifiedText = text;

      if (obj) {
        if (obj.bold) {
          modifiedText = <b key={index}>{text}</b>;
        }

        if (obj.italic) {
          modifiedText = <em key={index}>{text}</em>;
        }

        if (obj.underline) {
          modifiedText = <u key={index}>{text}</u>;
        }
      }

      switch (type) {
        case "heading-one":
          return (
            <h1 key={index} style={{marginBottom:"0.8rem"}}>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </h1>
          );
        case "heading-two":
          return (
            <h2 key={index} style={{marginBottom:"0.8rem"}}>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </h2>
          );
        case "paragraph":
          return (
            <p key={index} style={{marginBottom:"0.6rem"}} >
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </p>
          );
        case "code-block":
          return (
            <p key={index} style={{marginBottom:"0.5rem"}} className={styles.code_block}>
              {modifiedText.map((item, i) => (
                <code key={i}>{item}</code>
              ))}
            </p>
          );
        case "heading-four":
          return (
            <h4 key={index} style={{marginBottom:"0.8rem"}} >
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </h4>
          );
        case "image":
          return (
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          );
        default:
          return modifiedText;
      }
    };
  return (
    <div className={styles.post_details_section}>
      <div className={styles.post_img}>
        <img src={post.featuredImage.url} alt="" />
      </div>
      <div className={styles.post_author}>
        <div className={styles.post_author_section}>
          <img src={post.author.photo.url} alt="" />
          <span>{post.author.name}</span>
        </div>
        <div className={styles.timestamp}>
          <img src="/calender.png" alt="" />
          <span>{moment(post.createdAt).format("MMM DD,YYYY")}</span>
        </div>
      </div>
      <div className={styles.post_body_section}>
        <h3>{post.title}</h3>
        <div className={styles.post_description}>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
}
