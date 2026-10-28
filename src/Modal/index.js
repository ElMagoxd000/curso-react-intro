import ReactDOM from 'react-dom';
import './Modal.css';
function Modal({children}) {
	return ReactDOM.createPortal(
		<div className="overlay">
			<div className='modal'>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
}

export { Modal };