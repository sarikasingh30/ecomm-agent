
import { Navbar } from './components/Navbar';
import { MainRoutes } from './pages/MainRoutes';


const App: React.FC=() =>{

  return (
    <div className="w-full">
     <Navbar/>
     <MainRoutes/>
    </div>
  );
}

export default App;
