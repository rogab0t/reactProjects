import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import styles from './Profile.module.css';
import { mainRoute } from '../../utils/constants';
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    localStorage.setItem("scrollPosition", 0);
    navigate(`${mainRoute}profile/${path}`);
  };

  return (
    <div style={{
    }}>
      <div className={styles.profileNavContainer}>
        <Link to={mainRoute} className={styles.homeLink}>Inicio</Link>
        <div className={styles.tabsContainer}>
          <span 
            className={`${pathname.includes('my-info') ? styles.active : ''} ${styles.tab}`}
            onClick={() => handleTabClick('my-info')}
            style={{
              marginRight: 8,
            }}
          >
            Mi información
          </span>
          <span 
            className={`${pathname.includes('liked-events') ? styles.active : ''} ${styles.tab}`}
            onClick={() => handleTabClick('liked-events')}
          >
            Eventos favoritos
          </span>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;