import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div class="header">
                <header class="bg-[#2c373d] text-gray-400 w-full fixed top-0 z-50 border-b-4 border-teal-400">
                    <div class="header flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-26">
                        <div class="logo">
                            <a href="#">
                                <img class="h-40" src="../public/logo.png" alt="Logo" />
                            </a>
                        </div>

                        <nav class="main-nav flex-grow flex justify-center space-x-12">
                            <ul class="flex space-x-8">
                                <li class="nav-item">
                                    <a class="text-[#9eefe5] hover:text-white transition-colors" href="inici.html">Inici</a>
                                </li>
                                <li class="nav-item">
                                    <a class="text-[#9eefe5] hover:text-white transition-colors" href="noticies.html">Notícies</a>
                                </li>

                                <li class="nav-item">
                                    <a class="text-[#9eefe5] hover:text-white transition-colors" href="videojocs.html">Videojocs</a>
                                </li>

                                <li class="nav-item">
                                    <a class="text-[#9eefe5] hover:text-white transition-colors" href="contacte.html">Contacte</a>
                                </li>
                            </ul>
                        </nav>

                        <div class="user-area">
                            <div class="p-1 rounded-full border border-gray-500 hover:border-teal-400 transition-colors">
                                <svg class="h-6 w-6 text-gray-400 hover:text-teal-400 transition-colors cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="pt-16"></div>
                <div class="pt-16"></div>
            </div>

        );
    }
}

export default Header;