import './App.css';
import { useGlobalContext } from "./context"

import Favorites from './compponents/Favorites';
import Meals from './compponents/Meals';
import Modal from './compponents/Modal';
import Search from './compponents/Search';


export default function App() {
  const {showModal, favorites} = useGlobalContext()
  return (
    <main>
      <Search />
      {favorites.length > 0 &&<Favorites />}
      <Meals />
      {showModal && <Modal /> }
    </main>
  );
}
