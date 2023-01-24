import styles from "./GifCard.module.css";

export const GifCard = ({ id, title, image }) => {
  console.log(id, title, image);
  return (
    <div className={styles.gifcard}>
      <div>
        <h2>{title}</h2>
        <img src={image} />
      </div>
    </div>
  );
};
