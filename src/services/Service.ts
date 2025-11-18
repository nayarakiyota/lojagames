import axios from "axios";

const api = axios.create({
    baseURL: 'https://lojagames-moom.onrender.com'
})

// Função para listar todas as Categorias
export const listar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

// Função para cadastrar Categoria
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Função para atualizar Categoria
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

// Função para deletar Categoria
export const deletar = async (url: string) => {
    await api.delete(url)
}