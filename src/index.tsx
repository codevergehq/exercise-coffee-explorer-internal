import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import CoffeeLayout from './routes/shared/CoffeeLayout'
import CoffeeDetails from './routes/coffeeDetails/CoffeeDetails'
import Layout from './routes/shared/Layout'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CoffeeLayout />} >
            <Route path=":id" element={<CoffeeDetails />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
