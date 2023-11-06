declare module '@muriukialex/react-modal-popup' {
	export interface ModalProps {
		onClose: () => void
		children?: React.ReactNode
		customContainerStyles?: React.CSSProperties
		customContentStyles?: React.CSSProperties
		customModalButtonStyles?: React.CSSProperties
		delay?: number
	}

	const Modal: React.FC<ModalProps>
	export default Modal
}
