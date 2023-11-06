import { useState } from 'react'
import './App.css'
import Modal from '@muriukialex/react-modal-popup'

function App() {
	const [showModal, setShowModal] = useState(false)

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	return (
		<div className='App'>
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<button onClick={handleShowModal}>Show Modal</button>

			{showModal ? <Modal onClose={handleCloseModal}>message</Modal> : null}
		</div>
	)
}

export default App
