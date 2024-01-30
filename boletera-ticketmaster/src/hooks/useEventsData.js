import { useState } from "react";
import { BASE_URL } from "../utils/constants";

/* Hook para hacer llamadas a la API de manera local */
const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  async function loadEvents(params) {
    try {
      const response = await fetch(BASE_URL + `?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ""}`);
      const eventsResponse = await response.json();

      setIsLoading(false);
      setData(eventsResponse);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  }

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    loadEvents
  };
};

export default useEventsData;