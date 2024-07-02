
import {Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import Notes from './pages/Notes';
import {  useWidth } from './context/WidthContext';
 
function App() {
 const  widthOfScreen = useWidth()

 if(widthOfScreen>=767&& widthOfScreen<1400){
  return <div></div>
 }
  return (
   
    <Routes>
      <Route
      path='/'
      element={<Home/>
    }
      />

      <Route
      path='/notes/:groupId' 
      element={
        <Notes/>
      }
      />
    </Routes>
   
   )}

export default App
