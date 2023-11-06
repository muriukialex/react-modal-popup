# @muriukialex/react-modal-popup

`@muriukialex/react-modal-popup` is a React package that allows you to easily create customizable modal pop-ups for your React applications. With this package, you can display content in modal dialogs with optional custom styling and an auto-close feature.

## Installation

To install `@muriukialex/react-modal-popup`, you can use npm or yarn:

```bash
npm install @muriukialex/react-modal-popup
# or
yarn add @muriukialex/react-modal-popup
```

## Usage

Here's how you can use the `Modal` component in your React application:

```javascript
import Modal from '@muriukialex/react-modal-popup'

const YourComponent = () => {
	const handleCloseModal = () => {
		// Handle modal close action
	}

	return (
		<Modal
		  onClose={handleCloseModal}
		  customContainerStyles={/* Your custom styles */}
                  customContentStyles={/* Your custom styles */}
                  customModalButtonStyles={/* Your custom styles */}
		>
		{/* Your content goes here */}
		</Modal>
	)
}
```

### Props

The `Modal` component accepts the following props:

-   `onClose`: A callback function to handle the modal close action.
-   `children`: The content you want to display within the modal. (optional)
-   `customContainerStyles`: Custom styles for the modal container. (optional)
-   `customContentStyles`: Custom styles for the modal content. (optional)
-   `customModalButtonStyles`: Custom styles for the modal's close button. (optional)
-   `delay`: The time (in milliseconds) after which the modal automatically closes(default: 10000ms). (optional)

## Example

```javascript
import Modal from '@muriukialex/react-modal-popup'

const App = () => {
	const [showModal, setShowModal] = useState(false);

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleShowModal = () => {
		setShowModal(true);
	};

	return (
		<div className="App">
			<h1>React Pop up Modal Example</h1>
			<button onClick={handleShowModal}>Show Modal</button>

			{showModal ? <Modal onClose={handleCloseModal}>Some message</Modal> : null}
		</div>
	)
}
```

## License

This package is open-source and available under the ISC License.

## Issues

If you encounter any issues or have suggestions for improvement, please [submit an issue on GitHub](https://github.com/muriukialex/react-modal-popup/issues).

## Contributing

Contributions are welcome! Feel free to submit a [pull request](https://github.com/muriukialex/react-modal-popup/pulls).

---
