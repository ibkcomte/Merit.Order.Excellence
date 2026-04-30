import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import BookLandingPage from './BookLandingPage'
import Discovery from './Discovery'
import FAQSection from './FAQSection'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
    <BookLandingPage/>
    <Discovery/>
    <FAQSection/>
  </StrictMode>,
)
