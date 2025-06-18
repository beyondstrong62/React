import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import fun1 from './fun1.tsx'
import class1 from './class1.tsx'  


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <fun1 />
    <class1 />
  </StrictMode>,
)
