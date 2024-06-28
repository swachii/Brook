import React from 'react'

import childrenofavalon from "./bookimages/childrenofavalon.jpg";
import riseofavalon from "./bookimages/riseofavalon.jpg";
import thehobbit from "./bookimages/thehobbit.jpg";
import unfinishedtales from "./bookimages/unfinishedtales.jpg";


export default function Bookcards() {
  return (
    <>
    <div className=' header text-center py-5 my-1 '><h3><u>TOP PICKS</u></h3>
    <div className='bookcards '>
        <div className="row p-4">

             {/* 1st card */}
        <div className="card col m-2 " style= {{width: "18rem;", height: "93vh"}}>
  <img src={childrenofavalon} className="card-img-top" style= {{height :"62vh", maxwidth : "100%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Children Of Avalon</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary btn-outline-light">Read Now!</a>
  </div>
</div>

{/* 2nd Card */}

<div className="card col m-2 " style= {{width: "18rem;", height: "93vh"}}>
<img src={riseofavalon} className="card-img-top" style= {{height :"62vh", maxwidth : "100%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Rise OF Avalon</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary btn-outline-light">Read Now!</a>
  </div>
</div>

{/* 3rd card */}

<div className="card col m-2 " style= {{width: "18rem;", height: "93vh"}}>
<img src={thehobbit} className="card-img-top" style= {{height :"62vh", maxwidth : "100%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">The Hobbit</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary btn-outline-light">Read Now!</a>
  </div>
</div>

{/* 4th Card */}

<div className="card col m-2 " style= {{width: "18rem;", height: "93vh"}}>
<img src={unfinishedtales} className="card-img-top" style= {{height :"62vh", maxwidth : "100%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Unfinished Tales</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary btn-outline-light">Read Now!</a>
  </div>
</div>




        </div>
        

       
    </div>

    </div>

    </>
  )
}

