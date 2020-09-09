import ReactDOM from 'react-dom';

const Portal = ({ children, divId }) => {
  return ReactDOM.createPortal(children, document.getElementById(divId));
};

export default Portal;
