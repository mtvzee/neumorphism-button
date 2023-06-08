import { useState } from 'react';
import styles from '../style/Button.module.css';

type Props = {
  iconTitle: string;
};

export const Button = ({ iconTitle }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked ? (
        <div
          className={`${styles.btn} ${styles.clickedBtn}`}
          onClick={() => setIsClicked(false)}
        >
          <i className={`${iconTitle}`}></i>
        </div>
      ) : (
        <div className={styles.btn} onClick={() => setIsClicked(true)}>
          <i className={`${iconTitle} colored`}></i>
        </div>
      )}
    </>
  );
};
