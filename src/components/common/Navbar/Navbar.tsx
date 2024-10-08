import { IoIosRocket } from "react-icons/io";


export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full h-16 px-4 py-2 bg-white shadow-md">
        <div className="flex items-center gap-4">
            <IoIosRocket className="text-blue-500 hover:text-blue-700" size={32} />
        </div>
        <div className="flex items-center gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
                Link
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
                Another Link
            </a>
        </div>
    </nav>
    );
};