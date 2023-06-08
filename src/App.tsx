import { Button } from './components/Button';
import styles from './style/App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Button iconTitle="devicon-html5-plain-wordmark" />
        <Button iconTitle="devicon-css3-plain-wordmark" />
        <Button iconTitle="devicon-javascript-plain" />
        <Button iconTitle="devicon-typescript-plain" />
        <Button iconTitle="devicon-react-original-wordmark" />
        <Button iconTitle="devicon-nextjs-original" />
        <Button iconTitle="devicon-tailwindcss-plain" />
      </div>
    </div>
  );
};
export default App;
