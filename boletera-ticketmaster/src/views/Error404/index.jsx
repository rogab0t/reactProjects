import { useRouteError } from 'react-router-dom';
import styles from './Error404.module.css';

const Error404 = () => {
  const error = useRouteError();

  return (
    <div>
      <h3 className={styles.title}>Ops! {error.status}</h3>
      <p className={styles.description}>No hemos encontrado la ruta que buscas</p>
      <p className={styles.description}>{error.data ? error.data : error.statusText}</p>
    </div>
  );
};

export default Error404;