// src/components/SuccessModal.jsx

export const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">She said yes! 🎉</h2>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  };