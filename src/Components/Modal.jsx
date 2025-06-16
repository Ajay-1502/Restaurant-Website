import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.hideCart}>
      <div className="modal">{props.children}</div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
