import meme from "../images/meme.png";
import React, { useState,  useEffect } from "react";

function GetRangomMeme(props) {
  const [post, setPost] = useState("")

  useEffect(()=>{
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(response => response.json())
      .then(data => {
        // console.log(data.url)
        setPost(data.url)
      })
      .catch(err =>{
        console.log(err)
      })
  },[props.openModal2])



  return (
    <div>
      <section className="container-center">
        {props.showModal ? (
          <div className="createMemeModal">
            <div className="imageContainer">
            <img className="memeImage" src={post} alt="meme" />
            </div>
            <button className="btn-close" onClick={props.openModal2}>
              Close
            </button>
          </div>
        ) : null}

        <h1><span className="getRandomTitle" >Get</span> Random Meme</h1>
        <img className="imageIcon" src={meme} alt="icon" />
        <div className="buttonAjst">
          <button className="btnStart" onClick={props.openModal2} ><span className="getRandomTitle" >Get</span> Random Meme</button>
        </div>
      </section>
    </div>
  );
}

export default GetRangomMeme;


