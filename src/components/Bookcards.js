import React from 'react';
import childrenofavalon from "./bookimages/childrenofavalon.jpg";
import riseofavalon from "./bookimages/riseofavalon.jpg";
import thehobbit from "./bookimages/thehobbit.jpg";
import unfinishedtales from "./bookimages/unfinishedtales.jpg";
import './Bookcards.css'; // Import custom CSS for additional styling

export default function Bookcards() {
  return (
    <div className='container py-5 my-5'>
      <div className='header text-center mb-5'>
        <h3 className='top-picks-title'><u>TOP PICKS</u></h3>
      </div>
      <div className='row justify-content-center'>
        {/* 1st card */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card book-card shadow">
            <img src={childrenofavalon} className="card-img-top" alt="Children of Avalon" />
            <div className="card-body">
              <h5 className="card-title">Children Of Avalon</h5>
              <p className="card-text">An epic tale of adventure and magic in the land of Avalon.</p>
              <a href="/" className="btn btn-primary btn-block">Read Now!</a>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card book-card shadow">
            <img src={riseofavalon} className="card-img-top" alt="Rise of Avalon" />
            <div className="card-body">
              <h5 className="card-title">Rise Of Avalon</h5>
              <p className="card-text">Discover the origins of Avalon and its legendary heroes.</p>
              <a href="/" className="btn btn-primary btn-block">Read Now!</a>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card book-card shadow">
            <img src={thehobbit} className="card-img-top" alt="The Hobbit" />
            <div className="card-body">
              <h5 className="card-title">The Hobbit</h5>
              <p className="card-text">Join Bilbo Baggins on an unexpected journey to Middle-earth.</p>
              <a href="/" className="btn btn-primary btn-block">Read Now!</a>
            </div>
          </div>
        </div>
        {/* 4th card */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card book-card shadow">
            <img src={unfinishedtales} className="card-img-top" alt="Unfinished Tales" />
            <div className="card-body">
              <h5 className="card-title">Unfinished Tales</h5>
              <p className="card-text">Explore the untold stories of Middle-earth and beyond.</p>
              <a href="/" className="btn btn-primary btn-block">Read Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
