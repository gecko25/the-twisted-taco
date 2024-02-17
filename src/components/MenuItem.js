import Image from "next/image";
import styles from "./MenuItem.module.css";

function MenuItem({ title, description, imageUri }) {
  return (
    <div className={styles.MenuItem}>
      <Image
        className={styles.menuItemImage}
        src={imageUri}
        alt={title}
        width={100}
        height={100}
        priority
      />
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
