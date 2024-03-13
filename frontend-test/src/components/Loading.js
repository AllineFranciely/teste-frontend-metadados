import React from 'react';
import '../styles/Loading.css';
import Bolsa from '../images/bolsa.png';
import Oculos from '../images/oculos.png';
import Bone from '../images/bone.png';

function Loading() {
  return (
    <body className='body-loading'>
      <div className='loading'>
        <div className='squares'>
          <div className='square-1'>
            <img src={ Bolsa } alt='Bolsa' className='img-loading'/>
          </div>
          <div className='square-2'>
            <img src={ Oculos } alt='Óculos' className='img-loading'/>
          </div>
          <div className='square-3'>
            <img src={ Bone } alt='Boné' className='img-loading'/>
          </div>
        </div>
        <p>Loading</p>
      </div>
    </body>
  );
}

export default Loading;
