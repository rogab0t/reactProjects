import styles from './EventItem.module.css';
import hearthFilled from '../../../../assets/hearth-filled.png';
import hearthUnfilled from '../../../../assets/hearth-unfilled.png';
import useLikeEvents from '../../../../hooks/useLikeEvents';

const EventItem = ({info, name, images, id, onEventClick}) => {
  const { isEventLiked, toggleEventLiked } = useLikeEvents(id);

  const handleSeeMoreClick = (ev) => {
    onEventClick(id);
    ev.stopPropagation();
  };

  const handleHearthClick = () => {
    toggleEventLiked();
  };

  return (
    <div style={{
      display: 'flex',
    }}>
      <div className={styles.eventItemContainer}>
        <div className={styles.imageContainer}>
          <img 
            src={isEventLiked ? hearthFilled : hearthUnfilled} 
            alt="hearth button" 
            className={styles.hearthImage} 
            onClick={handleHearthClick}
          />
          <img src={images} alt={name} className={styles.eventImage} />
        </div>
        <div className={styles.eventInfoContainer}>
          <h4 className={styles.eventName}>{name}</h4>
          <p className={styles.eventInfo}>{info}</p>
          <button className={styles.eventSeeMoreBtn} onClick={handleSeeMoreClick}>
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;