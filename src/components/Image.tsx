

interface IProps{
    src:string
    alt:string,
    className:string
}
const Image = ({src,alt,className}:IProps) => {
  return (
      <img 
        src={src}
        className={className}
        alt={alt} />
  )
}

export default Image
