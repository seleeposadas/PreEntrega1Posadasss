import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import './App.css'

function App() {

  return (
    <div>
    <NavBar/>
    <ItemListContainer greetings = "Bienvenidos a mi Pre Entrega"/>
    </div>
  )
}

export default App
