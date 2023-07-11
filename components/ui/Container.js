const black='bg-black text-white';
const grey='bg-whisper';
const bottom='rounded-b-5xl';
const top='rounded-5xl';

export default function Container({color='black', position='bottom', children}) {
  return (
    <div className={`${color==='black'? black:grey} ${position==='bottom'? bottom:top} `} >
      {children}
    </div>
  )
}

