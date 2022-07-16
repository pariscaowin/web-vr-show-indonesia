import { useEffect, useState } from "react"
import useStore from "../../helpers/store"

const PopupUI5 = (props:any) => {
  const popUpIndex:number = useStore((s) => s.popup)
  const src = "https://bifesbuker.co.id/user/profile?a=1&u=anZ6RndQMHhmTW1VVjJVeVQ2cEZ3blhGTUlxZVFlL3FhM0Rra24wWkNzMD07bFlxV0EvVXRwNnlVdENtNFBxNzV6eVVlQTh2bGQxSjRaRzV4YzhRd2UvUT0l4iLa&mode="+props.mode
  const changeShowState = ()=>{
    useStore.setState({ popup: 0 });
  }
  useEffect(()=>{console.log('popup-index', popUpIndex)},[popUpIndex])
  return (
    <>
      <div 
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-80 "
        style={{display:popUpIndex===5?'block':'none', zIndex:2000000000}}
      >
        <div className="flex justify-center items-center w-screen h-screen">
          <div
            className="relative bg-gradient-to-b from-[#ea5b0c] to-[#f5a155] rounded-sm w-[95%] h-[90%] mx-auto p-1 flex"
          >
            <button 
              className="text-white text-[20px] px-[5px] rounded-full bg-black bg-opacity-70 w-[30px] h-[30px]"
              onClick={()=>changeShowState()}
            >
              X
            </button>

            <iframe className="w-full h-full ml-2" name="iframe_4" 
              src={src}>
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupUI5