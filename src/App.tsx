
import { Navbar } from './components/Navbar';
import { MainRoutes } from './pages/MainRoutes';


const App: React.FC=() =>{

  return (
    <div className="App">
     <Navbar/>
     <MainRoutes/>
    </div>
  );
}

export default App;
