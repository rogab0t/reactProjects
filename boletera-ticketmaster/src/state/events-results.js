import { create } from 'zustand';
import { BASE_URL } from '../utils/constants';

/* Hook/store para hacer llamadas a la API y guardar valores de manera global */
const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  loadEvents: async (params, selected) => {
    try {
      await set(() => ({ isLoading: true, }));

      const response = await fetch(BASE_URL + `.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ""}`);
      
      if (response.ok) {
        if (localStorage.getItem("searchTermLocal")) {
          localStorage.setItem('currentPagePaginateSecondary', selected ?? localStorage.getItem('currentPagePaginateSecondary') ?? 0);
        } else {
          localStorage.setItem('currentPagePaginate', selected ?? localStorage.getItem('currentPagePaginate') ?? 0);
        }
      }
      
      const eventsResponse = await response.json();
      
      await set(() => ({ data: eventsResponse, isLoading: false, }));
    } catch (error) {
      await set(() => ({ error, isLoading: false }));
    }
  },
}));

export default useEventsResults;