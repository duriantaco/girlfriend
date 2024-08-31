import { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseMove = (e) => {
    const noButton = document.getElementById('noButton');
    const rect = noButton.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

    if (distance < 100) {
      const angle = Math.atan2(offsetY, offsetX);
      const moveX = Math.cos(angle) * 150;
      const moveY = Math.sin(angle) * 150;

      let newTop = rect.top + moveY;
      let newLeft = rect.left + moveX;

      newTop = Math.max(0, Math.min(newTop, window.innerHeight - rect.height));
      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - rect.width));

      setNoButtonStyle({
        top: `${newTop}px`,
        left: `${newLeft}px`,
        position: 'absolute',
      });
    }
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>She said yes!</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      <div className="heart">&#10084;</div>
      <h1>Will You Be My Girlfriend?</h1>
      <div className="button-container">
        <button className="yesButton" onClick={handleYesClick}>
          Yes
        </button>
        <button
          id="noButton"
          className="noButton"
          style={noButtonStyle}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
