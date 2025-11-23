export default function Button({text, type = "button", onClick}) {
    return(
        <button 
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-accent text-white rounded-2xl hover:bg-accent-hover cursor-pointer"
        >
            {text}
        </button>
    );
}