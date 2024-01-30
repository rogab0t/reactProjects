import { useMemo, useCallback, useEffect, useState, useRef } from 'react';
import useEventsResults from '../../state/events-results';
import ReactPaginate from 'react-paginate';
import styles from "./Home.module.css";
import ScrollHandler from "../../components/ScrollHandler";
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';

const Home = () => {
  const { data, isLoading, error, loadEvents } = useEventsResults();
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('searchTermLocal') ? parseInt(localStorage.getItem('currentPagePaginateSecondary')) : parseInt(localStorage.getItem('currentPagePaginate')));
  const loadEventsRef = useRef();

  loadEventsRef.current = () => loadEvents(`&keyword=${localStorage.getItem("searchTermLocal") ?? ""}&page=${currentPage ? currentPage : 0}`);

  useEffect(() => {
    loadEventsRef.current();
  }, []);

  const events = useMemo(() => data._embedded?.events || [], [data?._embedded?.events]);
  const page = useMemo(() => data.page || {}, [data.page]);

  const handleNavbarSearch = (search) => {
    localStorage.setItem("searchTermLocal", search);
    localStorage.setItem('scrollPosition', 0);
    setSearchValue(localStorage.getItem("searchTermLocal").toLocaleLowerCase() ?? search.toLocaleLowerCase());
    
    if (search === "") {
      setCurrentPage(parseInt(localStorage.getItem('currentPagePaginate')));
      loadEvents(`&keyword=${localStorage.getItem("searchTermLocal") ?? ""}&page=${parseInt(localStorage.getItem('currentPagePaginate'))}`);
    } else {
      localStorage.setItem('currentPagePaginateSecondary', 0);
      setCurrentPage(0);
      loadEvents(`&keyword=${localStorage.getItem("searchTermLocal") ?? ""}&page=${parseInt(localStorage.getItem('currentPagePaginateSecondary'))}`);
    }
  };

  const handlePageClick = useCallback(({ selected }) => {
    localStorage.setItem('scrollPosition', 0);
    setCurrentPage(selected);
    loadEvents(`&keyword=${localStorage.getItem("searchTermLocal") ?? ""}&page=${selected}`, selected);
  }, [loadEvents]);

  const renderEvents = () => {
    if (isLoading) {
      return <div style={{
        marginTop: '20vh',
      }}>Cargando resultados...</div>
    }
    
    if (error) {
      return (
        <div style={{
          marginTop: '20vh',
        }}>
          <p>Ha ocurrido un error</p>
          <button onClick={() => window.location.reload()}>Recargar</button>
        </div>
      )
    }

    return (
      <ScrollHandler>
        <Events searchValue={searchValue} events={events} />
        <ul style={{
          margin: '2rem 1rem',
          padding: '0',
        }}>
          <ReactPaginate
            className={styles.pagination}
            nextClassName={styles.next}
            previousClassName={styles.previous}
            pageClassName={styles.page}
            activeClassName={styles.activePage}
            disabledClassName={styles.disabledPage}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={page.totalPages}
            previousLabel="<"
            forcePage={currentPage}
            renderOnZeroPageCount={null}
          />
        </ul>
      </ScrollHandler>
    );
  };
  
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      {renderEvents()}
    </>
  );
};

export default Home;