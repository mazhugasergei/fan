import { useEffect, useRef, useState } from "react"

export default () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const reproducerRef = useRef<SVGSVGElement>(null)
  const playBtnRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    audioRef.current?.addEventListener("timeupdate", (e)=>{
      if(reproducerRef.current) reproducerRef.current.style.transform = `rotate(${audioRef.current!.currentTime / audioRef.current!.duration * 26}deg)`
    })
    audioRef.current?.addEventListener("play", (e)=>{
      setIsPlaying(true)
      if(playBtnRef.current) playBtnRef.current.checked = true
    })
    audioRef.current?.addEventListener("pause", (e)=>{
      setIsPlaying(false)
      if(playBtnRef.current) playBtnRef.current.checked = false
    })
    audioRef.current?.addEventListener("ended", (e)=>{
      setIsPlaying(false)
      if(playBtnRef.current) playBtnRef.current.checked = false
    })
  }, [])

  useEffect(()=>{
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
  }, [isPlaying])

  return (
    <main>
      <div className="container">

        <div className="gramophone">
          <audio ref={audioRef} src="https://github.com/mazhugasergei/gramophone/raw/main/src/assets/audio/Just Dance.mp3" />
          <div className={`disk type-2 ${isPlaying ? "is-playing" : ""}`} />
          <svg ref={reproducerRef} className="reproducer" xmlns="http://www.w3.org/2000/svg" width="149" height="389" viewBox="0 0 149 389" fill="none"><g clipPath="url(#clip0_1_2)"><rect x="108.992" y="13.8925" width="23" height="51" rx="4" transform="rotate(15 108.992 13.8925)" fill="#FEFFFD"/><rect x="110.76" y="16.9543" width="18" height="46" rx="1.5" transform="rotate(15 110.76 16.9543)" stroke="#80838A"/><rect x="118.323" y="21.5691" width="1" height="41" transform="rotate(15 118.323 21.5691)" fill="#80838A"/><rect x="102.175" y="58.6532" width="13" height="1" transform="rotate(15 102.175 58.6532)" fill="#80838A"/><rect x="110.457" y="27.7436" width="13" height="1" transform="rotate(15 110.457 27.7436)" fill="#80838A"/><rect x="108.386" y="35.471" width="13" height="1" transform="rotate(15 108.386 35.471)" fill="#80838A"/><rect x="106.316" y="43.1984" width="13" height="1" transform="rotate(15 106.316 43.1984)" fill="#80838A"/><rect x="104.245" y="50.9258" width="13" height="1" transform="rotate(15 104.245 50.9258)" fill="#80838A"/><rect x="112.527" y="20.0162" width="13" height="1" transform="rotate(15 112.527 20.0162)" fill="#80838A"/></g><rect x="109.345" y="14.5048" width="22" height="50" rx="3.5" transform="rotate(15 109.345 14.5048)" stroke="#80838A"/><path d="M104.5 79L90.091 130.523C88.7041 135.482 88.0337 140.614 88.1002 145.763L89.7703 275.199C89.9195 286.76 86.3537 298.064 79.5977 307.448L72 318" stroke="#FEFFFD" strokeWidth="8"/><path d="M105.5 79L91.091 130.523C89.7041 135.482 89.0337 140.614 89.1002 145.763L90.7703 275.199C90.9195 286.76 87.3537 298.064 80.5977 307.448L73 318" stroke="#BDC1B8" strokeWidth="2"/><path d="M107.5 79L93.091 130.523C91.7041 135.482 91.0337 140.614 91.1002 145.763L92.7703 275.199C92.9195 286.76 89.3537 298.064 82.5977 307.448L75 318" stroke="#D7D7D7" strokeWidth="2"/><mask id="path-14-inside-1_1_2" fill="white"><path fillRule="evenodd" clipRule="evenodd" d="M101.541 115.577C115.072 115.577 126.041 104.608 126.041 91.0772C126.041 77.5462 115.072 66.5772 101.541 66.5772C88.0096 66.5772 77.0406 77.5462 77.0406 91.0772C77.0406 104.608 88.0096 115.577 101.541 115.577ZM101.041 102.577C107.668 102.577 113.041 97.2046 113.041 90.5772C113.041 83.9497 107.668 78.5772 101.041 78.5772C94.4132 78.5772 89.0406 83.9497 89.0406 90.5772C89.0406 97.2046 94.4132 102.577 101.041 102.577Z"/></mask><path fillRule="evenodd" clipRule="evenodd" d="M101.541 115.577C115.072 115.577 126.041 104.608 126.041 91.0772C126.041 77.5462 115.072 66.5772 101.541 66.5772C88.0096 66.5772 77.0406 77.5462 77.0406 91.0772C77.0406 104.608 88.0096 115.577 101.541 115.577ZM101.041 102.577C107.668 102.577 113.041 97.2046 113.041 90.5772C113.041 83.9497 107.668 78.5772 101.041 78.5772C94.4132 78.5772 89.0406 83.9497 89.0406 90.5772C89.0406 97.2046 94.4132 102.577 101.041 102.577Z" fill="#293848"/><path d="M123.041 91.0772C123.041 102.951 113.415 112.577 101.541 112.577V118.577C116.728 118.577 129.041 106.265 129.041 91.0772H123.041ZM101.541 69.5772C113.415 69.5772 123.041 79.203 123.041 91.0772H129.041C129.041 75.8893 116.728 63.5772 101.541 63.5772V69.5772ZM80.0406 91.0772C80.0406 79.203 89.6665 69.5772 101.541 69.5772V63.5772C86.3528 63.5772 74.0406 75.8893 74.0406 91.0772H80.0406ZM101.541 112.577C89.6665 112.577 80.0406 102.951 80.0406 91.0772H74.0406C74.0406 106.265 86.3528 118.577 101.541 118.577V112.577ZM110.041 90.5772C110.041 95.5477 106.011 99.5772 101.041 99.5772V105.577C109.325 105.577 116.041 98.8614 116.041 90.5772H110.041ZM101.041 81.5772C106.011 81.5772 110.041 85.6066 110.041 90.5772H116.041C116.041 82.2929 109.325 75.5772 101.041 75.5772V81.5772ZM92.0406 90.5772C92.0406 85.6066 96.0701 81.5772 101.041 81.5772V75.5772C92.7563 75.5772 86.0406 82.2929 86.0406 90.5772H92.0406ZM101.041 99.5772C96.0701 99.5772 92.0406 95.5477 92.0406 90.5772H86.0406C86.0406 98.8614 92.7563 105.577 101.041 105.577V99.5772Z" fill="#FEFFFD" mask="url(#path-14-inside-1_1_2)"/><rect x="74" y="75.7279" width="18" height="4" transform="rotate(-45 74 75.7279)" fill="#FEFFFD"/><rect x="113.598" y="115.326" width="18" height="4" transform="rotate(-45 113.598 115.326)" fill="#FEFFFD"/><path d="M14.4054 369.726C13.077 368.736 12.8026 366.856 13.7927 365.528L53.0229 312.89C53.5364 312.201 54.3208 311.765 55.1771 311.693L63.5885 310.987C64.3182 310.925 65.0452 311.133 65.6324 311.571L79.0258 321.553C79.624 321.998 80.0346 322.651 80.1775 323.383L81.7638 331.511C81.9258 332.341 81.73 333.201 81.2248 333.879L41.9804 386.536C40.9903 387.864 39.1107 388.138 37.7822 387.148L14.4054 369.726Z" fill="url(#paint0_linear_1_2)"/><rect x="17.3335" y="364.124" width="31" height="2" transform="rotate(36.6966 17.3335 364.124)" fill="#D9D9D9"/><rect x="19.7238" y="360.917" width="31" height="2" transform="rotate(36.6966 19.7238 360.917)" fill="#D9D9D9"/><rect x="23.3093" y="356.106" width="31" height="2" transform="rotate(36.6966 23.3093 356.106)" fill="#D9D9D9"/><rect x="25.6996" y="352.898" width="31" height="2" transform="rotate(36.6966 25.6996 352.898)" fill="#D9D9D9"/><defs><linearGradient id="paint0_linear_1_2" x1="35.0789" y1="336.967" x2="63.2666" y2="357.974" gradientUnits="userSpaceOnUse"><stop stopColor="#11333F"/><stop offset="1" stopColor="#0D232B"/></linearGradient><clipPath id="clip0_1_2"><rect x="108.992" y="13.8925" width="23" height="51" rx="4" transform="rotate(15 108.992 13.8925)" fill="white"/></clipPath></defs></svg>
        </div>

        <input ref={playBtnRef} type="checkbox" id="playBtn" onChange={(e)=>{setIsPlaying(e.target.checked)}} />
        {/* <label className="play-btn" htmlFor="playBtn" /> */}
      </div>
    </main>
  )
}