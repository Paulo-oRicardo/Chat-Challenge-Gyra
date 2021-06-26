import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Chat from './Components/Chat/Chat'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import styles from './app.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
function App() {
  return (
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
      </Switch>
    </div>
    </section>
    </Router>
  );
}

export default App;
