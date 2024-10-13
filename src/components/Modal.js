function Modal({ message, onClose }) {
  return (
    <div className={`modal ${message ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        {Array.isArray(message) ? (
          message.map((msg, index) => <p key={index}>{msg}</p>) // Each message in its own <p>
        ) : (
          <p>{message}</p> // If it's a string, render as single <p>
        )}
      </div>
    </div>
  );
}

export default Modal;
