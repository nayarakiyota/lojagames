import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps {
    produto: Produto
}

function CardProdutos({ produto }: Readonly<CardProdutoProps>) {
    return (
        <div className="flex flex-col justify-between my-4 sm:my-6 md:my-4 lg:my-10 overflow-hidden bg-linear-to-bl from-teal-300 via-violet-200 to-violet-300 rounded-lg">
            <div className="flex items-end justify-end pt-2 pr-2">
                <Link to={`/editarproduto/${produto.id}`}>
                    <PencilIcon
                        size={24}
                        className="mr-1 hover:fill-teal-600"
                    />
                </Link>

                <Link to={`/deletarproduto/${produto.id}`}>
                    <TrashIcon
                        size={24}
                        className="mr-1 hover:fill-red-700"
                    />
                </Link>
            </div>

            <div className="py-4">
                <img
                    src={produto.foto}
                    className="mx-auto mt-1 h-44 max-w-75"
                    alt={produto.nome}
                />

                <div className="p-4">
                    <p className="text-sm text-center uppercase">
                        {produto.nome}
                    </p>
                    <h3 className="text-xl font-bold text-center uppercase">
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(produto.preco)}
                    </h3>
                    <p className="text-sm italic text-center">
                        Categoria: {produto.categoria?.tipo}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <button
                    className="flex items-center justify-center w-full py-2 font-medium text-white bg-violet-400 hover:bg-violet-900"
                >
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default CardProdutos