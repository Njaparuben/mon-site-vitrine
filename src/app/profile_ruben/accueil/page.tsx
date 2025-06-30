import Card from "@/components/shared/card";
import NavBar from "@/components/shared/nav-bar";

export default async function Accueil(){
    const ListeMenu=[{name:"Accueil",link:"/profile_ruben/accueil"},
        {name:"Portfolio",link:"/profile_ruben/portfolio"},
        {name:"Contact",link:"/profile_ruben/contact"},
        {name:"A propos",link:"/profile_ruben/a-propos"}];
    return(
        
        <div className="flex flex-col items-center m-0 h-screen bg-black text-white">
            
                <nav className="  w-full  m-0 flex gap-10 position-fixed bg-white w-full h-20 text-black items-center justify-center ">
                    <NavBar navList={ListeMenu} styles="hover:text-purple-600 hover:border-b-2"/>
                </nav>
            
            <div className="text-center bg-[url('/images/ville_nocturne.jpeg')] bg-cover bg-center h-[40%] w-full m-0 pb-8">
                <h1 className="text-4xl font-bold mt-15 mb-4">Bienvenue sur mon site vitrine</h1>
                <p className="text-lg  mb-8 text-white-light mt-5 hover:text-purple-600 animate-[wiggle_0.2s_ease-in-out_infinite]">Je suis Ruben, un développeur passionné.</p>
                <a href="/profile_ruben/portfolio" className="px-6 py-3 bg-blue-600 text-white  rounded hover:bg-blue-700 transition duration-300 ">
                    Voir mon portfolio
                </a>
            </div>  
            <div className="bg-gray-200 w-full h-[60%]">
                <Card title="Titre de la carte" description="Description de la carte" link="/profile_ruben/portfolio"/>
            </div>
        </div>
        
    )
}