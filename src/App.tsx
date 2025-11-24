import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categoria/listarcategorias/ListarCategorias"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarcategorias/DeletarCategoria"
import ListarProdutos from "./components/produto/listarprodutos/ListarProdutos"
import FormProduto from "./components/produto/formproduto/FormProduto"
import DeletarProduto from "./components/produto/deletarprodutos/DeletarProduto"

function App() {
  return (
    <>

      <BrowserRouter>
        {/* Div para estilizar o bg de toda a pagina */}
        <Navbar />
        <div className="flex flex-col min-h-[64vh] bg-linear-to-bl from-violet-300 via-violet-400 to-teal-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App