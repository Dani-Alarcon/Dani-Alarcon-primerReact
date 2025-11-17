import React from "react";

const Card = ({ title, buttonText, index }) => {
    // Variables: Estils de la targeta i del botó
    const estilTargeta = "flex items-center justify-between p-3 rounded-lg shadow-lg mb-3 transition-all duration-500 transform";
    const estilBoto = "relative z-10 px-4 py-1.5 bg-[#2c373d] text-[#9eefe5] rounded-lg font-medium text-sm hover:bg-[#9eefe5] hover:text-[#2c373d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105";

    return (
        <div className={`group relative ${estilTargeta} from-[#6c859d] to-[#7a92aa] 
                        hover:scale-[1.02] hover:shadow-[#9eefe5]/50 hover:ring-2 hover:ring-[#9eefe5] 
                        bg-gradient-to-r overflow-hidden`}>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10 flex items-center justify-center w-7 h-7 mr-3 bg-[#2c373d] text-[#9eefe5] 
                           rounded-full font-bold text-xs border-2 border-[#9eefe5]/30 shadow-lg flex-shrink-0">
                {index + 1}
            </span>
            
            <p className="relative z-10 flex-1 text-white font-semibold text-base tracking-wide drop-shadow-lg">
                {title}
            </p>
            
            <button className={estilBoto}> 
                {buttonText} →
            </button>
        </div>
    );
};

const Imatge = ({ imageSrc, title, category }) => (
    <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:ring-2 hover:ring-[#9eefe5]">
        <div className="aspect-video bg-[#2c373d] relative overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c373d] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute top-3 left-3 px-3 py-1 bg-[#9eefe5] text-[#2c373d] rounded-full text-xs font-bold shadow-lg">
                {category}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-2 drop-shadow-lg">{title}</h3>
                <button className="px-4 py-1 bg-[#9eefe5] text-[#2c373d] rounded-lg font-medium text-sm hover:bg-white transition-colors shadow-lg">
                    Descobrir →
                </button>
            </div>
        </div>
    </div>
);

const Section = () => {
    // Dades de contingut
    const llistatNoticies = [
        { title: "Les últimes novetats del món gaming", buttonText: "Veure més" },
        { title: "Anàlisi dels millors llançaments", buttonText: "Veure més" },
        { title: "Entrevistes exclusives amb desenvolupadors", buttonText: "Veure més" }
    ];

    const llistatVideojocs = [
        { title: "Cyberpunk 2077: Guia definitiva", buttonText: "Veure més" },
        { title: "Elden Ring: Tots els secrets", buttonText: "Veure més" },
        { title: "The Legend of Zelda: Anàlisi completa", buttonText: "Veure més" }
    ];

    const imatgesDestacades = [
        { imageSrc: "https://gaming-cdn.com/images/products/2616/orig/the-legend-of-zelda-breath-of-the-wild-switch-juego-nintendo-eshop-europe-cover.jpg?v=1730381682",
             title: "Joc destacat de la setmana", category: "DESTACAT" },
        { imageSrc: "https://media.vandal.net/i/1280x720/9-2025/26/20259269264037_1.jpg",
             title: "Anàlisi en profunditat", category: "ANÀLISI" },
        { imageSrc: "https://www.nintenderos.com/wp-content/uploads/2025/10/473.png",
             title: "Guia completa per principiants", category: "GUIA" }
    ];

    // Estils de Tailwind agrupats
    const classesColumna = "w-full lg:w-1/2 p-6 rounded-xl backdrop-blur-md shadow-xl border-2 border-[#9eefe5]/40 shadow-[#9eefe5]/30 transition-all duration-500 hover:shadow-[#9eefe5]/50 hover:border-[#9eefe5]/60 transform hover:-translate-y-1 bg-gradient-to-br from-[#4b617b]/90 to-[#3d4f61]/90";
    const divisorTitol = "h-0.5 flex-1 bg-gradient-to-r from-transparent to-[#9eefe5]/50 rounded-full";
    const classesTitol = "text-xl sm:text-2xl font-bold text-[#9eefe5] font-iceberg drop-shadow-lg";


    return (
        <section 
            className="relative w-full min-h-screen py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/fondoWeb.png')", width:"100vw" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2c373d]/60 via-[#2c373d]/40 to-[#2c373d]/60"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#9eefe5]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#6c859d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 text-center mb-10 px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#9eefe5]/10 backdrop-blur-sm border border-[#9eefe5]/30 rounded-full mb-4 shadow-lg">
                    <span className="w-2 h-2 bg-[#9eefe5] rounded-full animate-pulse"></span>
                    <span className="text-[#9eefe5] text-xs font-medium font-iceberg">Actualitzat avui</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9eefe5] mb-3 font-iceberg 
                               drop-shadow-[0_0_30px_rgba(158,239,229,0.5)] tracking-wide">
                    Portal Gaming Premium
                </h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-lg">
                    El millor contingut sobre videojocs i notícies del sector
                </p>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-center lg:space-x-8 space-y-8 lg:space-y-0 mb-12">
                
                <div className={classesColumna}>
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <div className={divisorTitol}></div>
                        <h2 className={classesTitol}>
                            Últimes notícies
                        </h2>
                        <div className={`${divisorTitol} bg-gradient-to-l`}></div>
                    </div>
                    
                    {llistatNoticies.map((item, index) => (
                        <Card key={index} title={item.title} buttonText={item.buttonText} index={index} />
                    ))}
                    
                    <div className="mt-4 pt-4 border-t border-[#9eefe5]/20 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#9eefe5] rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-[#9eefe5] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-[#9eefe5] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                
                <div className={classesColumna}>
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <div className={divisorTitol}></div>
                        <h2 className={`${classesTitol} text-center`}>
                            Millors videojocs
                        </h2>
                        <div className={`${divisorTitol} bg-gradient-to-l`}></div>
                    </div>
                    
                    {llistatVideojocs.map((item, index) => (
                        <Card key={index} title={item.title} buttonText={item.buttonText} index={index} />
                    ))}
                    
                    <div className="mt-4 pt-4 border-t border-[#9eefe5]/20 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#9eefe5] rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-[#9eefe5] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-[#9eefe5] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#9eefe5]/50 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#9eefe5] font-iceberg drop-shadow-lg">
                            Contingut destacat
                        </h2>
                        <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#9eefe5]/50 rounded-full"></div>
                    </div>
                    <p className="text-white/80 text-sm">Els millors articles i guies seleccionats per tu</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {imatgesDestacades.map((item, index) => (
                        <Imatge key={index} imageSrc={item.imageSrc} title={item.title} category={item.category} />
                    ))}
                </div>
            </div>
             
        </section>
    );
};

export default Section;