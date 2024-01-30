import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import { BASE_URL } from "../../../../utils/constants";
import ScrollHandler from "../../../../components/ScrollHandler";
import EventItem from "../../../../components/Events/components/EventItem";
import { mainRoute } from '../../../../utils/constants';

const LikedEvents = () => {
  window.scrollTo(0, 0);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventsDetails = async () => {
      try {
        setIsLoading(true);

        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const results = [];

        for (const eventId of likedEvents) {
          const response = await fetch(`${BASE_URL}/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
          const data = await response.json();

          results.push(data);
        }

        setEvents(results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventsDetails();
  }, []);

  const handleEventItemClick = (eventId) => {
    navigate(`${mainRoute}detail/${eventId}`);
  }

  if (isLoading) {
    return <div style={{
      paddingTop: '15vh',
    }}>Cargando...</div>
  }

  if (events.length === 0) {
    return (
      <>
        <div style={{
          paddingTop: '15vh',
        }}>No hay eventos favoritos :(</div>
        <button onClick={() => window.location.reload()}>Recargar</button>
      </>
    )
  }

  if (Object.keys(error).length > 0) {
    return (
      <>
        <div style={{
          paddingTop: '15vh',
        }}>Ha ocurrido un error</div>
        <button onClick={() => window.location.reload()}>Recargar</button>
      </>
    )
  }

  return (
    <ScrollHandler>
      <div style={{
        padding: '15vh 0 35px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
      {events.map((event, index) => (
        <EventItem 
          key={`liked-event-item-${event.id}-${index}`}
          info={event.info}
          name={event.name}
          id={event.id}
          images={event.images[0].url}
          onEventClick={handleEventItemClick}
        />
      ))}
      </div>
    </ScrollHandler>
  )
};

export default LikedEvents;