import ListarProdutos from "../../components/produto/listarprodutos/ListarProdutos"
import ModalProduto from "../../components/produto/modalprodutos/ModalProduto"

function Home() {


    return (
        <>
            <div
                className="bg-linear-to-bl from-violet-300 via-violet-400 to-teal-300 flex justify-center"
            >
                {/* Grid que divide a tela em 2 colunas */}
                <div
                    className="container grid grid-cols-1 sm:grid-cols-2 text-white"
                >
                    {/* Coluna Esquerda */}
                    <div
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2
                            className="text-5xl font-bold "
                        >Seja Bem Vinde!</h2>
                        <p
                            className="text-xl"
                        >Aqui você encontra os melhores Games!</p>

                        {/* Link/Botão */}
                        <div
                            className="flex justify-around gap-4"
                        >
                            <ModalProduto />
                        </div>
                    </div>

                    {/* Coluna Direita */}
                    <div
                        className="flex justify-center"
                    >
                        <img
                            src="https://ik.imagekit.io/qiazjnea4/imggirllojagames.png"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListarProdutos />
        </>
    )
}

export default Home