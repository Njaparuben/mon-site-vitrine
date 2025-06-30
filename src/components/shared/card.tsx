

const Card = ({title,description,link}:{title:string,description:string,link?:string}) => {
    
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} className="w-15 h-10  bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Voir
            </a>
        </div>
    );
}

export default Card;