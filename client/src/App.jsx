import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Loader from './Components/Loader';
import Chat from './Components/Chat/Chat';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import styles from './app.module.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3700);
  }, []);
  return loading ? (
    <Loader />
  ):(
    <Router>
    <section className={styles.appContainer}>
      <Header />
    <div className={styles.posHeader}>
      <SideBar />
        <Switch>
          <Route exact path="/">
            <img src="./no_chat.jfif" alt="wallpaper" />
          </Route>
          <Route path="/chat1">
            <Chat />
          </Route>
          <Route exact path="/chat2">
            <img src="./no_chat.jfif" alt="wallpaper" />
          </Route>
        </Switch>
    </div>
    </section>
    </Router>
  );
}

export default App;
