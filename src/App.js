import './styles.css';
import axios from 'axios'
import  {useState, useEffect} from 'react'
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';

import SearchBox from './components/SearchBox';

const App =() => {
  const randomId = Math.floor(Math.random() * 126) + 1;

const [location, setLocation] = useState({})

useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  //console.log(location)
  
    return (
    <>
        <h1>Ryck and Morty</h1>
        <SearchBox setLocation={setLocation}/>
        <LocationInfo location={location}/>
        <ResidentsList location={location}/>
          
        
    </>

    );
}

export default App;
