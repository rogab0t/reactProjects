import { useEffect, useState } from 'react';

function ScrollHandler({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    localStorage.setItem('scrollPosition', currentPosition.toString());
  };

  useEffect(() => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      setScrollPosition(parseInt(savedPosition));
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
      window.scroll(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <div>
      {children}
    </div>
  );
}

export default ScrollHandler;