import React from 'react';
import classnames from 'classnames';
import './ErrorBoundary.scss';
import { Svg } from 'Components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo, showDetails } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div className="app-error">
          <div className="app-error__container">
            <div className="app-error__logo">
              <Svg id="logo" />
            </div>
            <h1>¡Ups! Something went wrong. </h1>
            <div className="app-error__description">
              Details:
              <button type="button" className="button button--small" onClick={() => this.setState({ showDetails: !showDetails })}>
                {showDetails ? <span>Hide</span> : <span>Show</span>}
              </button>
              <div className={classnames('app-error__data', { 'app-error__data--show': showDetails })}>
                {error && error.toString()}
                <br />
                {errorInfo && errorInfo.componentStack && errorInfo.componentStack}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
