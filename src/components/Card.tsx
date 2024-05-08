
import { IProduct } from '../interfaces';
import { textSlice } from '../utils/functions';
import Button from './Button';
import Image from './Image';


const Card = ({product}:{product:IProduct}) => {
  const {imgURL,colors,description,price,title,id,category}=product
  
  return (
    <div key={id} className="max-w-sm md:max-w-lg md:mx-0 mx-auto border rounded-md p-2 flex flex-col">

      <Image src={imgURL} 
      alt="Product" 
      className="rounded-t-md h-[300px]"/>

      <h3>{title}</h3>
      <p className="text-sm">{textSlice(description)}</p>
      <div className="flex items-center gap-1 my-4">
        {colors.map(e=>(
          <span style={{backgroundColor:`${e}`}} className={`rounded-full w-5 h-5  cursor-pointer`} />
        ))
        }
      </div>
      <div className="flex items-center justify-between my-2">
        <span>{price}</span>
        
        <Image 
        src={category.imgURL} 
        alt='test'
        className="w-10 h-10 object-center rounded-full"/>
        
      </div>
      <div className="flex  space-x-2 my-4 text-white">
        <Button width='w-full' className="  bg-green-500 " onClick={()=>{
            alert(id)
        }}>Edite</Button>
        <Button width='w-full'  className=" bg-red-500 ">Delete</Button>
      </div>
    </div>
  )
}

export default Card
