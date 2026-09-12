import Nav from './components/Nav';
import Banner from './components/Banner';
import ExploreTechs from './components/ExploreTechs';
import Footer from './components/Footer';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <ExploreTechs />
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition= {Bounce}
      />
    </>
  );
}

export default App
