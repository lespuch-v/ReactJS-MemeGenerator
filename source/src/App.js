import "./App.css";
import CreateMeme from "./components/CreateMeme";
import GetRangomMeme from "./components/GetRangomMeme";
import { useState, useRef } from "react";

function App() {
  const [showModalR, setShowModalR] = useState(false);
  const [showModalC, setShowModalC] = useState(false);

  const openModal = () => {
    setShowModalR((prevState) => !prevState);
  };
  const openModal2 = () => {
    setShowModalC((prevState) => !prevState);
  };

  // Closing modal by clicking on the background.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalR(false);
      setShowModalC(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header" ref={modalRef} onClick={closeModal}>
        <CreateMeme
          showModal={showModalR}
          setShowModal={setShowModalR}
          openModal={openModal}
        />
        <GetRangomMeme
          showModal={showModalC}
          setShowModal={setShowModalC}
          openModal2={openModal2}
        />
      </header>
    </div>
  );
}

export default App;
