import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import Products from './pages/Products/Products.tsx'
import PrivateRoutes from './pages/PrivateRoutes/PrivateRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>

          <Route element={<PrivateRoutes />}>
            <Route element={<Products />} path='/products' />
          </Route>
        </Routes>  
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
