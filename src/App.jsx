import { useEffect, useState } from 'react';
import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AdviceCard from './components/advice-card';
import adviceService from './services/advice-service';

const App = () => {
  
  const [adviceData, setAdviceData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getRandomAdvice = () => {
    adviceService().getRandomAdvice().then((advice) => {
      setAdviceData(advice);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }).catch(err => console.log(err))
  }
  useEffect(() => {
    getRandomAdvice();
  }, []);

  return (
    <div className="App">
      {
      <AdviceCard advice={adviceData} onGenerateRandomAdvice={() => {
        setIsLoading(true);
        getRandomAdvice()
      }} isLoading={isLoading}/>
      }
      
      <div class="attribution">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Noha M.</a>.
  </div>
    </div>
  );
}

export default App;