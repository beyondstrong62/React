import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './counter.jsx'
import Wrapper from './wrapper.jsx'

// function MApp() {
//   return (
//     <div>
//     <h1>My App</h1>
//     </div>
//   )
// }
// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">visit</a>
// )
// const anotherUser = "Rana";

// const reactElement = React.createElement (
//   'a',
//   { href: 'https://www.google.com', target: '_blank' },
//   'click me to visit Google',
//   anotherUser   
// )


ReactDOM.createRoot(document.getElementById('root')).
render(
  <>
  {/* <App />
  <Counter /> */}
  <Wrapper>
  <p>This is inside the wrapper.</p>
</Wrapper>

  </>
)