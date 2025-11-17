import React from "react";

const MiniCardNoticia = ({ title, date, imageSrc }) => (
    <div className="group relative bg-[#4b617b] rounded-lg overflow-hidden shadow-lg 
                    transition-all duration-300 transform hover:scale-[1.05] hover:shadow-[#9eefe5]/50 hover:ring-2 hover:ring-[#9eefe5]/70">

        <div className="aspect-square bg-gray-700 overflow-hidden">
            <img
                src={imageSrc}
                alt={title}
                className="w-fit h-fit object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
            />
        </div>

        <div className="p-3">
            <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{title}</h3>
            <p className="text-[#9eefe5] text-xs font-iceberg opacity-70">{date}</p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                        transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
);

// Component funcional simple para las noticias destacadas
const NoticiaDestacada = ({ title, excerpt, imageSrc, category }) => (
    <div className="relative p-5 rounded-xl bg-gradient-to-br from-[#4b617b]/90 to-[#3d4f61]/90 
                    backdrop-blur-md shadow-xl border-2 border-[#9eefe5]/40 shadow-[#9eefe5]/30 h-full">

        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">

            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 px-3 py-1 bg-[#9eefe5] text-[#2c373d] rounded-full text-xs font-bold font-iceberg shadow-lg">
                {category}
            </div>
        </div>

        <h2 className="text-2xl font-bold text-[#9eefe5] font-iceberg mb-2 drop-shadow-lg">{title}</h2>
        <p className="text-white/90 mb-4">{excerpt}</p>

        <button className="px-4 py-1.5 bg-[#2c373d] text-[#9eefe5] rounded-lg font-medium text-sm
                           hover:bg-[#9eefe5] hover:text-[#2c373d] transition-all duration-300 font-iceberg
                           shadow-lg transform hover:scale-[1.02]">
            Llegir Notícia →
        </button>
    </div>
);

class Noticies extends React.Component {
    state = {
        noticiesDestacades: [
            {
                title: "El nou motor gràfic revoluciona el món obert",
                excerpt: "Una anàlisi exhaustiva de les noves tecnologies implementades en els jocs d'última generació.",
                imageSrc: "https://user-images.githubusercontent.com/180032/54845242-2d1cff00-4cd9-11e9-87af-434063628126.png",
                category: "TECNOLOGIA"
            },
            {
                title: "Entrevista amb el creador d'Elden Ring: Els secrets del seu èxit",
                excerpt: "Parlem amb FromSoftware sobre el seu procés creatiu i les futures expansiones.",
                imageSrc: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1748630546",
                category: "EXCLUSIVA"
            }
        ],
        noticiesCurtes: [
            { title: "Filtració: Nou títol de 'The Witcher'", date: "Fa 2 hores", imageSrc: "https://cdn.cdkeys.com/496x700/media/catalog/product/n/e/new_project_-_2023-04-05t141127.373.jpg" },
            { title: "El joc indie del mes: 'Stardew Valley II'", date: "Fa 5 hores", imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Logo_of_Stardew_Valley.png/250px-Logo_of_Stardew_Valley.png" },
            { title: "Tendències en E-Sports: L'auge de Valorant", date: "Avui", imageSrc: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/valo2.png" },
            { title: "Anunci sorpresa de Nintendo: Metroid Prime 4", date: "Ahir", imageSrc: "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/hmywrkds1blhptid3lcs" },
            { title: "Guia de trofeus per a Cyberpunk 2077", date: "Setmana passada", imageSrc: "https://www.codigi.es/wp-content/uploads/2021/01/Cyberpunk-2077-PC-COVER.jpg" },
        ]
    };

    render() {
        const { noticiesDestacades, noticiesCurtes } = this.state;

        return (
            <div className="relative w-full min-h-screen py-12 bg-[#2c373d] bg-center bg-no-repeat overflow-hidden"
            style={{width:"100vw" }}
            >
                <div className="max-w-7xl mx-auto px-4 relative z-10">

                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#9eefe5]/50 rounded-full"></div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#9eefe5] font-iceberg drop-shadow-lg">
                                Darrer Contingut
                            </h1>
                            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#9eefe5]/50 rounded-full"></div>
                        </div>
                        <p className="text-white/80 text-lg">Totes les notícies actualitzades del món del videojoc.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {noticiesDestacades.map((noticia, index) => (
                            <NoticiaDestacada
                                key={index}
                                title={noticia.title}
                                excerpt={noticia.excerpt}
                                imageSrc={noticia.imageSrc}
                                category={noticia.category}
                            />
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-5 border-b border-[#9eefe5]/30 pb-2 flex items-center gap-2">
                        <span className="w-3 h-3 bg-[#9eefe5] rounded-full animate-pulse"></span>
                        Més Notícies
                    </h2>
                </div>

                <div style={{marginLeft:"12%" }}>
                    <div className="flex space-x-6 overflow-x-auto pb-4 custom-scrollbar">
                        {noticiesCurtes.map((noticia, index) => (
                            <div key={index} className="flex-shrink-0 w-64">
                                <MiniCardNoticia
                                    title={noticia.title}
                                    date={noticia.date}
                                    imageSrc={noticia.imageSrc}
                                />
                            </div>
                        ))}
                        <div className="flex-shrink-0 w-8"></div>
                    </div>
                </div>
                
                <div className="pb-12"></div>
            </div>
        );
    }
}

export default Noticies;