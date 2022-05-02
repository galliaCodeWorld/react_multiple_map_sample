import React from 'react'
import '../assets/my.css'

const Pillar = (props) => {
    const styleb = {
        marginLeft : props.marginleft ,
        width : props.width ,
        height : props.height ,
    };
    const style = {
        backgroundColor : props.color ,
        width: props.widthup,
        height: props.heightup,
    };
  return (
    <div className='pillar' style = {styleb}>
        <div className='pillar_f' style = {style}> 
        </div>
    </div>
  )
}

export default Pillar;
