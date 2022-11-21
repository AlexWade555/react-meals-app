import { useGlobalContext } from "../context"

const Modal = () => {
  const {selectedMeal, close} = useGlobalContext()


  return <aside className="modal-overlay">
    <div className="modal-container">
      <h1>{selectedMeal.strMeal}</h1>
      <button onClick={closeModal}>close</button>
    </div>
  </aside>
}

export default Modal
