import Articles from "./containers/Articles";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Layout from "./containers/Layout";
import { ArticlesProvider } from "./contexts/ArticlesContext";

function App() {
  return (
    <ArticlesProvider>
      <Layout>
        <Header/>
        <Articles />
        <Footer />
      </Layout>
   </ArticlesProvider>
  );
}

export default App;