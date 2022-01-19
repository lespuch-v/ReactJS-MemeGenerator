import writingImg from "../images/writing.png";
import React, { useState, useEffect } from "react";
import FormComponent from "./FormComponent";

function myRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function CreateMeme(props) {
  // console.log(props)

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data.memes[1].url)
        setPost(data.data.memes[myRandomNumber()].url);
      });
  }, [props.openModal]);

  return (
    <div>
      <section className="container-center">
        {props.showModal ? (
          <div className="createMemeModal">
            <div className="imageContainer">
              <div className="topTextImageContainer">
                <img src={post} alt="Sweet PIC" className="memeImage" />
                <FormComponent />
              </div>
            </div>
            <button className="btn-close" onClick={props.openModal}>
              Close
            </button>
          </div>
        ) : null}

        <h1>
          <span className="createRandomTitle">Create</span> Random Meme
        </h1>
        <img className="imageIcon" src={writingImg} alt="icon" />
        <div className="buttonAjst">
          <button className="btnStart" onClick={props.openModal}><span className="createRandomTitle">Create</span> Random Meme</button>
        </div>
      </section>
    </div>
  );
}

export default CreateMeme;
