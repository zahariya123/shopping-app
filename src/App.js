import './App.css';
import MainRoute from './pages/MainRoute'

import { ApplicationContextProvider } from "./context/application-context";

function App() {
  return (
    <div className="App">
      <ApplicationContextProvider>
       <MainRoute/>
       </ApplicationContextProvider>
    </div>
  );
}

export default App;
