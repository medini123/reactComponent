import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/Fullname';
import Address from './components/Address';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About'
import './App.css'






function App () {
  return (
    <div className="container">
    <NavBar />
    <ProfilePhoto />
    <FullName />
    <Address />
    <About />
    </div>
    );
}

export default App;