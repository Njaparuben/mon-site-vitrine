interface props{
    text:string;
    link:string;
    color:string;
    size:string | undefined;
    form:string
}
const SimpleButton = (p:props) => {
    p.color = p.color == undefined ? "blue" : p.color;

    return (
        <a href={p.link} className="w-15 h-10  bg- hover:bg-${color} text-600 text-white rounded hover:bg-blue-700 transition duration-300">{text}</a>
    )
}

export default SimpleButton;