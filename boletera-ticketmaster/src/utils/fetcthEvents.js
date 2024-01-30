import wrapPromise from "./wrapPromise";
import { BASE_URL } from "./constants";

const fetchEventDatail = async (eventId) => {
  try {
    const response = await fetch(`${BASE_URL}/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = (eventId) => {
  return {
    eventDetail: wrapPromise(fetchEventDatail(eventId))
  };
}

export default fetchData;