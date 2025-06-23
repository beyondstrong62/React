// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  // This lifecycle hook is called after an error is thrown by a descendant component.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // This lifecycle hook is called after an error has been thrown.
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // Call the retry handler if provided
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onRetry) {
      this.props.onRetry(); // Call the parent's retry logic
    }
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{
          border: '2px solid #dc3545',
          padding: '20px',
          margin: '20px',
          borderRadius: '8px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          textAlign: 'center'
        }}>
          <h2>Something went wrong.</h2>
          <p>We're sorry for the inconvenience. Please try again.</p>
          <button
            onClick={this.handleRetry}
            style={{
              padding: '10px 20px',
              marginTop: '15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
          {this.props.debug && ( // Optional: show error details in debug mode
            <details style={{ marginTop: '20px', textAlign: 'left', whiteSpace: 'pre-wrap' }}>
              <summary>Error Details</summary>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;