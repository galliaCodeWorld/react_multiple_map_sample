import React from "react"
import './assets/my.css'
import icon from './imgs/icon.png'
import Pillar from './components/Pillar'
import { molecule } from './data'

const App = () => {
    return (
        <div className="back">
            <div className="top">
                <img src={icon} width = {80} height = {80}/>
                    <div className='top_body'>
                        <h2> Adverse effect & contraindications </h2>
                        <div className='right'>
                            <div><h1>546</h1></div>
                            {/* Non imported data.jx */}
                            <Pillar color={'#8676ff'}
                             marginleft = {'10px'}
                              width = {'30%'} 
                              height = {'8px'} 
                              widthup = {'90%'}
                              heightup = {'8px'}
                              />
                            <Pillar color={'#fd708b'}
                             marginleft = {'0px'}
                              width = {'30%'} 
                              height = {'8px'} 
                              widthup = {'40%'}
                              heightup = {'8px'}
                              />          
                        </div>
                    </div>
                </div>
            <div className='bottom'>
                {/* using data.js */}
            {
                    molecule.map((item, index) => {
                        const row = item.col;
                        return (
                            <div className='column' key = {index}>
                            {row.map((pp, index) => {
                                return (<Pillar color = {pp.color} height = {pp.height} heightup={pp.heightup} width = {pp.width} widthup = {pp.widthup} marginleft={pp.marginleft} key = {index} />)
                            })}
                            </div>
                        )
                    })
                }                
            <div className='bottom_right'>
                <h2>Similarity measures<br />
                    between molecules
                    </h2>
                    <div className='number'>
                        <h1>125%</h1>
                        <p> 10% </p>
                    </div> 
            </div>   
            </div>
        </div>
    );
}

export default App;