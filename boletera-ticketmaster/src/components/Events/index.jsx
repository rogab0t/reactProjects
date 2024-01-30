import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";
import { memo } from 'react';
import { mainRoute } from "../../utils/constants";
import styles from "./Events.module.css";

const Events = ({ searchValue, events }) => {
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`${mainRoute}detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    eventsFiltered.sort((a, b) => a.name.localeCompare(b.name));

    if (searchValue.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchValue));
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        info={eventItem.info}
        name={eventItem.name}
        id={eventItem.id}
        images={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
      />
    ));
  };

  return (
    <div className={styles.eventsContainer}>
      <h1 className={styles.eventsTitle}>Eventos</h1>
      {renderEvents()}
    </div>
  );
};

export default memo(Events);