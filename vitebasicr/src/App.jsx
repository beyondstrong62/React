

function App() {
  const username = 'John Doe';

  return (
    <div>
      <rana />
      <h1>Hello, {username}!</h1>
      <p>Welcome to the React application.</p>
      <p>Click the link below to visit Google:</p>
      <a href="https://www.google.com" target="_blank">Visit Google</a>
      <br />
      <a href="https://www.google.com" target="_self">Click me</a>
      <br />
      <a href="https://www.google.com" target="_top">Click me</a>
      <br />
      <a href="https://www.google.com" target="_parent" >Click me</a>

    </div>
  )
}

export default App
