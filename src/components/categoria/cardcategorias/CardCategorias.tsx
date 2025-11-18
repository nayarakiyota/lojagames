import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}
function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between ">
            <header className="py-2 px-6 bg-linear-to-bl from-violet-300 via-violet-400 to-teal-300 text-white font-bold text-2xl">
                Categoria
            </header>
            <p className="p-8 text-3xl bg-linear-to-bl from-teal-100 via-violet-100 to-violet-100">{categoria.tipo}</p>

            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className="w-full text-slate-100 bg-blue-300
                       hover:bg-blue-700 
                        flex items-center justify-center py-2 font-medium">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className="text-slate-100 bg-red-300 hover:bg-red-700 w-full flex items-center justify-center font-medium">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria