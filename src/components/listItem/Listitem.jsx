import './listitem.scss'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

export default function Listitem(props) {
  let navigate = useNavigate();
  const [aniId, setAniId] = useState(props.aniId)

  return (
    <div className='listItem'>
        <img
            onClick={() => {
              if(props.isAnime)
              {
                setAniId();
                localStorage.setItem('LS_ID', aniId)
                // window.location.reload()
              }
              else
              {
                localStorage.setItem('LS_ID', aniId)
                navigate("/anime")
              }
            }} 
            src={props.poster}
            alt="" 
        />

        <div className='itemInfo'>
        <div className='title'>
            {props.title}
          </div>

      </div>
    </div>
  )
}
