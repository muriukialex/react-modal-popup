import './styles.css'
import { useState } from 'react'
import Modal from '@muriukialex/react-modal-popup'

export default function App() {
	const [showModal, setShowModal] = useState(false)

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	return (
		<div className='App'>
			<h1>React Pop up Modal Example</h1>
			<button onClick={handleShowModal}>Show Modal</button>

			{showModal ? <Modal onClose={handleCloseModal}>Some message</Modal> : null}
		</div>
	)
}
