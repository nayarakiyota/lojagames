import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>

            <div className="w-full flex justify-center py-4 bg-linear-to-bl from-teal-300 via-violet-300 to-violet-400 text-white">

                <div className="container flex justify-between text-lg mx-8">

                    <div className="container flex justify-between items-center mx-8">

                        <Link to="/home" className="flex items-center">
                            <img
                                src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png"
                                alt="Logo Loja de Games"
                                className="h-12 w-auto"
                            />
                        </Link>

                        <div className="flex gap-4">
                            Produtos
                            <Link to='/categorias' className='hover:underline font-medium'>Categorias</Link>
                            <Link to='/cadastrarcategoria' className='hover:underline font-medium'>Cadastrar Categoria</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Navbar