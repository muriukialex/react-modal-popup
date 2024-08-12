import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  title: string;
  showModal: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  customContainerStyles?: React.CSSProperties;
  customContentStyles?: React.CSSProperties;
  customModalButtonStyles?: React.CSSProperties;
}

const generateUniqueId = () => {
  return `modal-${Math.random()
    .toString(36)
    .substring(2, 9)}`;
};

const Modal = ({
  title,
  showModal,
  onClose,
  children,
  customContainerStyles = {},
  customContentStyles = {},
  customModalButtonStyles = {},
}: ModalProps) => {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const id = generateUniqueId();

  useEffect(() => {
    const createModalRoot = () => {
      const modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', id);
      document.body.appendChild(modalRoot);
      setRoot(modalRoot);
    };

    createModalRoot(); // Call the function to create the modal-root div

    return () => {
      const modalRoot = document.getElementById(id);
      if (modalRoot) {
        modalRoot.remove();
      }
    };
    // Disable the eslint rule for the following line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (root === null) return null;

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
  };

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
  };

  const buttonStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '10px',
    right: '14px',
    ...customModalButtonStyles,
  };

  return createPortal(
    showModal ? (
      <div style={containerStyles} onClick={onClose}>
        <div style={contentStyles}>
          {title}
          <hr />
          {children}
          <button style={buttonStyles} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    ) : null,
    root as HTMLElement
  );
};

export default Modal;
