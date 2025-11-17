import React from "react";
import { Link, useLocation } from 'react-router-dom';

// Se convierte el componente a funcional para poder usar useLocation
function Header() {
    const location = useLocation();

    // Función para determinar si una ruta está activa
    const isActive = (path) => location.pathname === path;

    // Clases base y activas para los elementos de navegación
    const baseLinkClasses = "text-[#9eefe5] hover:text-white transition-colors";
    const activeLinkClasses = "text-white font-bold border-b-2 border-[#9eefe5]"; // Estilo para el enlace activo

    return (
        <div className="header">
            {/* Se mantiene la estructura y estilos de Tailwind */}
            <header className="bg-[#2c373d] text-gray-400 w-full fixed top-0 z-50 border-b-4 border-teal-400">
                <div className="header flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-26">
                    <div className="logo">
                        {/* El logo siempre enlaza a la raíz ("/") */}
                        <Link to="/">
                            <img className="h-40" src="../public/logo.png" alt="Logo" />
                        </Link>
                    </div>

                    <nav className="main-nav flex-grow flex justify-center space-x-12">
                        <ul className="flex space-x-8">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`${baseLinkClasses} ${isActive('/') ? activeLinkClasses : ''}`}
                                >
                                    Inici
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/noticies"
                                    className={`${baseLinkClasses} ${isActive('/noticies') ? activeLinkClasses : ''}`}
                                >
                                    Notícies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/videojocs"
                                    className={`${baseLinkClasses} ${isActive('/videojocs') ? activeLinkClasses : ''}`}
                                >
                                    Videojocs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contacte"
                                    className={`${baseLinkClasses} ${isActive('/contacte') ? activeLinkClasses : ''}`}
                                >
                                    Contacte
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="user-area">
                        <div className="p-1 rounded-full border border-gray-500 hover:border-teal-400 transition-colors">
                            <svg className="h-6 w-6 text-gray-400 hover:text-teal-400 transition-colors cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
            <div className="pt-16"></div>
            <div className="pt-16"></div>
        </div>
    );
}

export default Header;