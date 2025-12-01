import React from "react";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import Gallery from "./Gallery"

const StarIcon = () => (
    <svg className="w-4 h-4 text-[#9eefe5]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.62-.921 1.902 0l1.286 3.968a1 1 0 00.95.691h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.459a1 1 0 00-.364 1.118l1.286 3.968c.3.921-.755 1.688-1.54 1.118l-3.38-2.459a1 1 0 00-1.176 0l-3.38 2.459c-.785.57-1.84-.197-1.54-1.118l1.286-3.968a1 1 0 00-.364-1.118L2.094 9.396c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.691l1.286-3.968z" />
    </svg>
);


const JocCard = ({ title, plataformas, rating, imageSrc }) => (
    <article className="group relative bg-[#4b617b] rounded-xl overflow-hidden shadow-xl 
                        transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[#9eefe5]/50 hover:ring-2 hover:ring-[#9eefe5]/70">

        <div className="aspect-video bg-gray-700 overflow-hidden">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x337/3d4f61/9eefe5?text=JOC"; }}
                loading='lazy'
            />
        </div>

        <div className="p-4">
            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 font-iceberg">{title}</h3>

            <div className="flex flex-wrap gap-1 mb-2">
                {plataformas.map((p, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-[#3d4f61] text-white/80 rounded-full">
                        {p}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-1.5">
                <StarIcon />
                <p className="text-[#9eefe5] text-sm font-bold">{rating}</p>
                <span className="text-white/60 text-xs">/ 5.0</span>
            </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                        transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </article>
);



class Videojocs extends React.Component {
    state = {
        jocsDestacats: [
            {
                title: "Baldur's Gate 3",
                descripcio: "El guanyador del Joc de l'Any de 2023 ha redefinit el gènere RPG amb la seva profunditat narrativa i la llibertat d'elecció sense precedents.",
                genere: "RPG / Fantasia",
                plataforma: "PC, PS5, Xbox Series X/S"
            },
            {
                title: "Donkey Kong Bananza",
                descripcio: "Un joc que innova totalment en la saga Donkey Kong i l'unic joc de Nintendo nominat al Joc de l'any.",
                genere: "Acció / Aventura",
                plataforma: "Nintendo Switch 2"
            }
        ],
        jocsRecents: [
            { title: "Starfield", plataformas: ["Xbox", "PC"], rating: 4.5, imageSrc: "../public/starfield.webp" },
            { title: "Alan Wake 2", plataformas: ["PS5", "Xbox", "PC"], rating: 4.8, imageSrc: "https://www.pcgamesn.com/wp-content/uploads/2023/10/alan-wake-2-review-remedy.jpg" },
            { title: "Diablo IV", plataformas: ["PC", "PS5", "Xbox"], rating: 4.2, imageSrc: "../public/diablo.webp" },
            { title: "Final Fantasy XVI", plataformas: ["PS5"], rating: 4.4, imageSrc: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2723/e806746863f6a27e02e200871d87f54c9c1b97951a804791.jpg" },
            { title: "Hogwarts Legacy", plataformas: ["Multi"], rating: 4.1, imageSrc: "https://images.pushsquare.com/58c35b5a7940e/hogwarts-legacy-ps5-ps4-cover.cover_large.jpg" },
            { title: "Resident Evil 4 Remake", plataformas: ["PS5", "Xbox", "PC"], rating: 4.7, imageSrc: "../public/residentEvil.avif" },
        ],
        trailers: [
            {
                id: 1,
                title: "Baldur's Gate 3",
                mp4Src: "../public/Baldur's Gate 3_ Launch Trailer.mp4webm",
                webmSrc: "../public/BaldurTrailer.webm",
                posterSrc: "../public/BaldurTrailer.webm"
            },
            {
                id: 2,
                title: "Donkey Kong Bananza",
                mp4Src: "../public/Donkey_Trailer.mp4",
                webmSrc: "../public/Donkey_Trailer.webm",
                posterSrc: "../public/Donkey_Trailer.webm"
            }
        ]
    };

    render() {
        const { jocsDestacats, jocsRecents, trailers } = this.state;
        const bg3 = jocsDestacats[0];
        const donkey = jocsDestacats[1];
        const trailerBg3 = trailers.find(t => t.id === 1);
        const trailerDonkey = trailers.find(t => t.id === 2);


        return (

            <main className="relative w-full min-h-screen py-12 bg-[#2c373d] bg-center bg-no-repeat overflow-x-hidden"
                style={{ width: "100vw" }}
            >
                <section className="max-w-7xl mx-auto px-4 relative z-10">

                    <header className="text-center mb-10 pt-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#9eefe5]/50 rounded-full"></div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#9eefe5] font-iceberg drop-shadow-lg">
                                Tràilers Destacats
                            </h1>
                            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#9eefe5]/50 rounded-full"></div>
                        </div>
                        <p className="text-white/80 text-lg">Mira els tràilers dels jocs més importants del moment.</p>
                    </header>

                    <section aria-labelledby="trailer-bg3-title" className="mb-12">
                        <article className="relative p-6 rounded-xl bg-gradient-to-br from-[#4b617b]/95 to-[#3d4f61]/95 
                                            backdrop-blur-md shadow-2xl border-2 border-[#9eefe5]/40 shadow-[#9eefe5]/30 h-full overflow-hidden">

                            <div className="lg:flex gap-6 items-center">
                                <div className="lg:w-1/2">
                                    <span className="text-sm font-medium text-[#9eefe5] mb-1 block">{bg3.plataforma}</span>
                                    <h2 className="text-3xl font-bold text-white font-iceberg mb-3 drop-shadow-lg">{bg3.title}</h2>
                                    <p className="text-white/90 mb-6 text-lg">{bg3.descripcio}</p>

                                    <button className="px-6 py-2 bg-[#9eefe5] text-[#2c373d] rounded-lg font-bold text-base
                                                       hover:bg-white hover:text-[#2c373d] transition-all duration-300 font-iceberg
                                                       shadow-lg transform hover:scale-[1.02]">
                                        Veure Detalls →
                                    </button>
                                </div>

                                <div className="lg:w-1/2 mt-6 lg:mt-0 relative">
                                    <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-[#9eefe5] text-[#2c373d] rounded-full text-xs font-bold font-iceberg shadow-lg">
                                        {bg3.genere}
                                    </div>
                                    {trailerBg3 && (
                                        <VideoPlayer
                                            mp4Src={trailerBg3.mp4Src}
                                            webmSrc={trailerBg3.webmSrc}
                                            posterSrc={trailerBg3.posterSrc}
                                            title={trailerBg3.title}
                                            loading='lazy'
                                        />
                                    )}
                                </div>
                            </div>
                        </article>
                    </section>

                    <section aria-labelledby="trailer-cp2077-title" className="mb-12">
                        <article className="relative p-6 rounded-xl bg-gradient-to-br from-[#4b617b]/95 to-[#3d4f61]/95 
                                            backdrop-blur-md shadow-2xl border-2 border-[#9eefe5]/40 shadow-[#9eefe5]/30 h-full overflow-hidden">

                            <div className="lg:flex flex-row-reverse gap-6 items-center">
                                <div className="lg:w-1/2">
                                    <span className="text-sm font-medium text-[#9eefe5] mb-1 block">{donkey.plataforma}</span>
                                    <h2 className="text-3xl font-bold text-white font-iceberg mb-3 drop-shadow-lg">{donkey.title}</h2>
                                    <p className="text-white/90 mb-6 text-lg">{donkey.descripcio}</p>

                                    <AudioPlayer
                                        mp3Source={`../public/AudioDonkey.mp3`}

                                    />
                                    <button className="px-6 py-2 bg-[#9eefe5] text-[#2c373d] rounded-lg font-bold text-base
                                                       hover:bg-white hover:text-[#2c373d] transition-all duration-300 font-iceberg
                                                       shadow-lg transform hover:scale-[1.02]">
                                        Veure Expansió →
                                    </button>
                                </div>

                                <div className="lg:w-1/2 mt-6 lg:mt-0 relative">
                                    <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-[#9eefe5] text-[#2c373d] rounded-full text-xs font-bold font-iceberg shadow-lg">
                                        {donkey.genere}
                                    </div>
                                    {trailerDonkey && (
                                        <VideoPlayer
                                            mp4Src={trailerDonkey.mp4Src}
                                            webmSrc={trailerDonkey.webmSrc}
                                            posterSrc={trailerDonkey.posterSrc}
                                            title={trailerDonkey.title}
                                            loading='lazy'
                                        />
                                    )}
                                </div>
                            </div>
                        </article>
                    </section>
                    <h2 id="recent-games-title" className="text-2xl font-bold text-white mb-6 border-b border-[#9eefe5]/30 pb-2 flex items-center gap-2 mt-12">
                        <span className="w-3 h-3 bg-[#9eefe5] rounded-full animate-pulse"></span>
                        Explora la Col·lecció
                    </h2>
                    <Gallery>
                        {jocsRecents.map((joc, index) => (
                            <JocCard
                                key={index}
                                title={joc.title}
                                plataformas={joc.plataformas}
                                rating={joc.rating}
                                imageSrc={joc.imageSrc}
                            />
                        ))}
                    </Gallery>

                </section>
            </main>
        );
    }
}

export default Videojocs;