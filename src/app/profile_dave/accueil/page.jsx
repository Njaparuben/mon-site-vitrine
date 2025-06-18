

export default async function Acceuil(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon site vitrine</h1>
            <p className="text-lg text-gray-700 mb-8">Je suis Dave, un développeur passionné.</p>
            <a href="/profile_dave/portfolio" className="px-6 py-3 bg-blue-600 text-white  rounded hover:bg-blue-700 transition duration-300 ">
                Voir mon portfolio
            </a>
        </div>
    )
}