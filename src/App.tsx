import CreateAd from "./components/Modals/ModalCreateAd";
import car from './assets/car1.png'

const App = () => {
  return (
    <>
    <img src={car} alt="" />
    <CreateAd />
    </>
  );
};

export default App;
