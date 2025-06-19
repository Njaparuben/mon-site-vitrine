import { headers } from "next/headers"


export default async function Accueil(){
    return(
        
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <header className="absolute top-0  w-full row-start-1">
                <nav className="flex gap-10 position-fixed bg-white w-full h-20 text-black items-center justify-center ">
                <a href="/profile_ruben/accueil">Accueil</a>
                <a href="/profile_ruben/portfolio">Portfolio</a>
                <a href="/profile_ruben/contact">Contact</a>
                <a href="/profile_ruben/a-propos">À propos</a>
            </nav>
            </header>
        <div className="text-center">
            <img src="/site_vitrine/src/assets/ville_nocturne.jpeg" alt="Ruben profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
        </div>  
            <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon site vitrine</h1>
            <p className="text-lg text-gray-700 mb-8">Je suis Ruben, un développeur passionné.</p>
            <a href="/profile_ruben/portfolio" className="px-6 py-3 bg-blue-600 text-white  rounded hover:bg-blue-700 transition duration-300 ">
                Voir mon portfolio
            </a>
        </div>
    )
}