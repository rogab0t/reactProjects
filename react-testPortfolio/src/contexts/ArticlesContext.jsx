import { createContext, useState, useEffect } from "react";

export const ArticlesContext = createContext({});

export const ArticlesProvider = ({ children }) => {
  const [user, setUser] = useState("rogab0t");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchDevTo() {
      let response = await fetch(`https://dev.to/api/articles?username=${user}`);
      return await response.json();
    }

    fetchDevTo().then(response => setArticles(response));
  }, [user]);

  return (
    <ArticlesContext.Provider value={{
        username: user, 
        articles: articles,
        setUser
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}