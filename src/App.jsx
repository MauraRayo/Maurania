import styles from "./App.module.css";

import { Info } from "./components/Info/Info";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
// import { Personal} from "./components/Personal/Personal";


function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Info/>
    <About/>
    <Experience/>
    <Projects />
    {/* <Personal /> */}
    


  </div>
}

export default App;
