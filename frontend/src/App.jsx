import './App.css'
/*import '../../bootstrap/css/bootstrap.min.css'*/
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Fooldal } from './oldalak/Fooldal'
import { Autok } from './oldalak/Autok'
import { Berleseim } from './oldalak/Berleseim'
import { Hirek } from './oldalak/Hirek'
import { Profilom } from './oldalak/Profilom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/"  element={ <Fooldal/> }/>
            <Route path="/Autok"  element={ <Autok/> }/>
            <Route path="/Berleseim"  element={ <Berleseim/> }/>
            <Route path="/Profilom"  element={ <Profilom/> }/>
            <Route path="/Hirek"  element={ <Hirek/> }/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
