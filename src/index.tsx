import './styles.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
	onClose: () => void
	children?: React.ReactNode
	customContainerStyles?: React.CSSProperties
	customContentStyles?: React.CSSProperties
	customModalButtonStyles?: React.CSSProperties
	delay?: number
}

const generateUniqueId = () => {
	return `modal-${Math.random().toString(36).substring(2, 9)}`
}

const Modal = ({
	onClose,
	children,
	customContainerStyles = {},
	customContentStyles = {},
	customModalButtonStyles = {},
	delay = 10000,
}: ModalProps) => {
	const [root, setRoot] = useState<HTMLDivElement | null>(null)
	const id = generateUniqueId()

	useEffect(() => {
		const createModalRoot = () => {
			const modalRoot = document.createElement('div')
			modalRoot.setAttribute('id', id)
			document.body.appendChild(modalRoot)
			setRoot(modalRoot)

			const timeout = setTimeout(() => {
				onClose()
			}, delay)

			return () => {
				clearTimeout(timeout)
			}
		}

		createModalRoot() // Call the function to create the modal-root div

		return () => {
			const modalRoot = document.getElementById(id)
			if (modalRoot) {
				modalRoot.remove()
			}
		}
	}, [])

	if (root === null) return null

	const containerStyles: React.CSSProperties = {
		position: 'absolute',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
		transition: 'background-color 0.3s',
		...customContainerStyles,
	}

	const contentStyles: React.CSSProperties = {
		padding: 20,
		background: '#fff',
		borderRadius: '2px',
		display: 'inline-block',
		minHeight: '300px',
		margin: '1rem',
		position: 'relative',
		minWidth: '300px',
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
		justifySelf: 'center',
		opacity: 1,
		transition: 'opacity 0.3s',
		...customContentStyles,
	}

	return ReactDOM.createPortal(
		<div style={containerStyles} onClick={onClose}>
			<div style={contentStyles}>
				{children}
				<hr />
				<button style={customModalButtonStyles} onClick={onClose}>
					Close
				</button>
			</div>
		</div>,
		root as HTMLElement,
	)
}

export default Modal
