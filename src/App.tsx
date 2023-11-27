import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataContextProvider } from './Context/DataContext'
import { Resumo } from './Pages/Resumo'
import { Vendas } from './Pages/Vendas'
import { Header } from './components/Header'
import { Sidenav } from './components/Sidenav'
import { Venda } from './Pages/Venda'
import './Style.css'


function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
