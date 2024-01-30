import { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
//import fetchData from "../../utils/fetcthEvents";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";

//const pathname = window.location.pathname;
//const resource = fetchData(pathname.substring(8, pathname.length));

const Detail = () => {
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [eventData, setEventData] = useState({});
  //console.log(eventId)
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchEventDatail = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
        const data = await response.json();
        
        setEventData(data);
      } catch (error) {
        setError(error)
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    

    fetchEventDatail();
  }, [eventId]);

  //const eventData = resource.eventDetail.read();
  console.log(eventData, ":(")

  const renderPlaseNote = (eventData) => {
    let plaseNoteText = String(eventData.pleaseNote);
    let notes = plaseNoteText.split('.');

    return notes.forEach(letter => {
      letter = letter.trim(".");

      <li>
        <p>{letter}</p>
      </li>
       
      console.log(letter)
    });
  }

  if (isLoading) {
    return <div style={{
      padding: '2rem',
    }}>Cargando...</div>
  }

  if (Object.keys(error).length > 0) {
    return (
      <>
        <div style={{
          padding: '2rem',
    }}>Ha ocurrido un error al obtener el detalle :(</div>
        <button onClick={() => window.location.reload()}>Recargar</button>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <img src={eventData.images?.[0].url} alt={eventData.name} className={styles.eventImage} />
      <div className={styles.mainInfoContainer}>
        <h4 className={styles.eventName} >{eventData.name}</h4>
        <p className={styles.eventInfo} >{eventData.info}</p>
        {eventData.dates?.start.dateTime ? <p className={styles.eventDate} >{format(new Date(eventData.dates?.start.dateTime), 'd / LLLL / yyyy - H:mm ', { locale: es })}hrs</p> : null}
      </div>

      <div className={styles.seatInfoContainer}>
        {eventData.seatmap ? <h6 className={styles.seatmapTitle}>Mapa del evento</h6> : ""}
        {eventData.seatmap?.staticUrl ? <img src={eventData.seatmap?.staticUrl} alt="seatmap event" className={styles.seatmapImg} /> : null}
        <div className={styles.pleaseNoteContainer}>
        <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>

          <ul>
            {renderPlaseNote(eventData)}
          </ul>

        <p className={styles.pricesRangesLegend}>Rango de precios: {eventData.priceRanges?.[0].min} {eventData.priceRanges?.[0].currency} - {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</p>
        </div>
      </div>
      <a className={styles.buyTicketsButton} href={eventData.url} target="_blank" rel="noreferrer">
        Ir por tus voletos
      </a>
    </div>
  );
}

export default Detail;