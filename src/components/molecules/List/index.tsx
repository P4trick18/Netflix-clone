import React, {useRef} from "react"
import Title from "../../atoms/Title"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import Button from "../../atoms/Button"

interface ListInterface {
  moviesImg: string[]
  title: string
}

function List({moviesImg, title}: ListInterface) {
  const listaRef = useRef<HTMLDivElement>(null)

  function scroll(x: number) {
    listaRef.current && listaRef.current.scrollBy({
      left: x,
      behavior: 'smooth',
    })
  }

  return (
  <div className='categoria'>
    <Title>{title}</Title>
    <div
      className='categoria-lista'
      ref={listaRef}
    >
      <Button
        className='botao-lista categoria-esquerda'
        onClick={() => scroll(-300)}
      >
        <MdOutlineArrowBackIosNew className='icone' size={35} />
      </Button>
      {
        moviesImg.map((movieImg, index) => {
          return <>
            <img src={movieImg} alt={`${index}`} />
          </>
        })
      }
      <Button
        className='botao-lista categoria-direita'
        onClick={() => scroll(300)}
      >
         <MdOutlineArrowForwardIos className='icone' size={35} />
      </Button>

        <Button 
        className='botao-lista categoria-meio'
        onClick={() => scroll(300)}
        >
        <MdOutlineArrowForwardIos className='icone' size={35} />
      </Button>
    </div>
  </div>
  )
}

export default List