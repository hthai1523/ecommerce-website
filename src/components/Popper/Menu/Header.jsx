import { FaChevronLeft } from "react-icons/fa6";


function Header({title, onBack}) {
    return ( 
        <header className="relative flex-shrink-0 h-[50px] mt-[-8px] ">
            <button className="w-50px h-full bg-transparent cursor-pointer">
                <FaChevronLeft />
            </button>
            <h4 className="absolute top-[50%] left-1/2 translate-x-1/2  translate-y-1/2">{title}</h4>
        </header>
     );

}

export default Header;