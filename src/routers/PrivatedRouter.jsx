import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import User from '../pages/User';
import Home from '../pages/Home';


export const PrivatedRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />} />
        </Routes>
      </div>
    </>
  )
}
