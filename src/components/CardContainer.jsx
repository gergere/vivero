import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getByCategory } from '../services/bbdd'
import './CardContainer.css'


const CardContainer = () => {

    const [data, setData] = useState([])
    const { cat } = useParams()

    // useEffect(() => {
    //     getByCategory()
    //         .then((data)=>setData(data))
    // }, [])

  return (
      <>
          <h1>{cat}</h1>
      </>
    )
}

export default CardContainer