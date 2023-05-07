import { useEffect, useRef, useState } from "react"

export default () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    audioRef.current?.addEventListener("timeupdate", (e)=>{
      if(progressRef.current) progressRef.current.style.width = audioRef.current!.currentTime / audioRef.current!.duration * 100 + "%"
    })
  }, [])

  useEffect(()=>{
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
  }, [isPlaying])

  return (
    <main>
      <div className="container">
        <audio ref={audioRef} src="/audio/Heartaches.mp3" />
        <input type="checkbox" onChange={(e)=>{setIsPlaying(e.target.checked)}} />
        <div className="gramophone">
          <div className={`disk type-1 ${isPlaying ? "is-playing" : ""}`} />
          {/* <div className={`disk type-2 ${isPlaying ? "is-playing" : ""}`} /> */}
          <div className="progress"><div ref={progressRef}/></div>
        </div>
      </div>
    </main>
  )
}