import './App.css';
import Header from './components/header/Header';
import Section from './components/section/Section';
import {languages} from "./data"

function App() {
  return (
    <div className="main-container">
 <Header/>
 <Section myData={languages}/>

    </div>
  );
}

export default App;
