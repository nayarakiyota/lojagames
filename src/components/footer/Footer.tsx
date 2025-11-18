import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-linear-to-bl from-violet-400 via-teal-300 to-violet-300 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Loja de Games Generation | Copyright: {data}
                    </p>
                    <p className="text-lg font-semibold">Acesse nossas Redes Sociais</p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/nayara-kiyota/" target="_blank">
                            <LinkedinLogoIcon size={48} weight="bold" />
                        </a>

                        <a href="https://github.com/nayarakiyota" target="_blank">
                            <GithubLogoIcon size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer