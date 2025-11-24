import React from "react";

class VideoPlayer extends React.Component {
    
    render() {
        const { mp4Src, webmSrc, posterSrc, title, lazyLoad = true } = this.props;

        const preloadValue = lazyLoad ? "none" : "auto";
        
        return (
            <figure className="w-full bg-[#4b617b] rounded-xl overflow-hidden shadow-2xl border-2 border-[#9eefe5]/40">
                <video 
                    controls
                    preload={preloadValue}
                    poster={posterSrc}
                    title={title}
                    className="w-full aspect-video"
                > 
                    <source src={webmSrc} type="video/webm" /> 
                    
                    <source src={mp4Src} type="video/mp4" />
                    <p className="p-4 text-white/70">
                        El vostre navegador no suporta el tag de vídeo. Podeu descarregar el vídeo per veure'l: 
                        <a href={mp4Src} className="text-[#9eefe5] underline ml-2">MP4</a> o 
                        <a href={webmSrc} className="text-[#9eefe5] underline ml-2">WebM</a>.
                    </p>
                </video>
                <figcaption className="p-4 text-white text-lg font-iceberg border-t border-[#3d4f61]/70">{title}</figcaption>
            </figure>
        );
    }
}

export default VideoPlayer;