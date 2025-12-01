import React from 'react';


class AudioPlayer extends React.Component {
    render() {
        const { mp3Source, oggSource, titolPista } = this.props;

        const fontMp3 = mp3Source || "audio/la_meva_musica.mp3";
        const fontOgg = oggSource || "audio/la_meva_musica.ogg";
        const titol = titolPista || "Pista d'Àudio (Substituir)";

        const estilContenidor = "bg-[#4b617b] p-4 rounded-xl shadow-lg border border-[#9eefe5]/40 w-full";
        const estilTitol = "text-[#9eefe5] text-lg font-bold mb-3 font-iceberg";
        const estilAlerta = "bg-red-800 text-white p-3 rounded-lg text-sm";
        
        return (            
            <div className="relative w-full mb-4"> 
                <div className={estilContenidor}>
                    <h2 className={estilTitol}>{titol}</h2>                    
                    <audio controls className="w-full h-10 rounded-lg">                        
                        <source src={fontMp3} type="audio/mpeg" />                    
                        <source src={fontOgg} type="audio/ogg" />                        
                        <p className={estilAlerta}>
                            El teu navegador no suporta la reproducció d'àudio. 
                            Pots descarregar la pista directament des de <a href={fontMp3} className="underline font-semibold">aquí</a>.
                        </p>
                    </audio>
                    
                   
                </div>
            </div>
        );
    }
}

export default AudioPlayer;