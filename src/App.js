import "./App.css";
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
 import Home from './pages/Home'
 import Login from './pages/Login'
 import Schedule from './pages/Schedule'
 import Testimonials from './pages/Testimonials'
 import Layout from './pages/Layouts'
 import Error from './pages/Error'
import Pricing from "./pages/Pricing";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />}/>
        <Route path="Pricing" element={<Pricing />}/>
        <Route path="Schedule" element={<Schedule />}/>
        <Route path="Testimonials" element={<Testimonials />}/>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </Router>
}

export default App;
