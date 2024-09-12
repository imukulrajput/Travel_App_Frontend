import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CategoryProvider,DateProvider,FilterProvider} from './context'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <BrowserRouter>
      <DateProvider>
        <FilterProvider>
    <App />
    </FilterProvider>
    </DateProvider>
    </BrowserRouter>
    </CategoryProvider>
  </StrictMode>,
)
