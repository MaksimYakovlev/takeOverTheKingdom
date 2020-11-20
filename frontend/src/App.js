// import NewGame from './Components/NewGame/NewGame'
import Map from './Components/Map/Map'
import Countries from './Components/Map/Countries'

function App() {
  return (
    <>
    {/* <NewGame/> */}
    {/* <Map/> */}
    <div className="col">
          <h4>Страны</h4>
         <Countries countries ={[1, 2, 3, 4, 5]}/>
        </div>
    </>
  );
}
export default App;