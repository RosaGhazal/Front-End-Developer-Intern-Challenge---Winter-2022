import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Like from "./Like";
import useLoading from "./useLoading";

export default function NasaPhoto() {

    const [ photoData, setPhotoData ] = useState(null);
    const [loader, showLoader, hideLoader] = useLoading();

    useEffect(() => {
        fetchPhoto();
            showLoader();

        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=ubYWfxGqb63EglGVczb7D2273GQFtUBEeLZ7rPHN`
            );
            const data= await res.json();
            setPhotoData(data);
            hideLoader();

        }
    }, []);

    if (!photoData) return <div />
    return(
        <>
            <NavBar />
                <div className="container">
                    <div className="leftContainer">
                        <div className="nasaPhoto">
                            {photoData.media_type === 'image' ? (
                                <img src={photoData.url} alt={photoData.title} className="imgStyle" />
                            ) : (
                                <iframe 
                                    title="space-video"
                                    src={photoData.url}
                                    frameBorder="0"
                                    allow="encrypted-media"
                                    allowFullScreen
                                    className="photo"              
                                />
                            )}
                        </div>
                        <Like />     
                    </div>
                    <div className="rightContainer">
                        <h1 className="card-title">{photoData.title}</h1>
                        <p className="date card-text">{photoData.date}</p>
                        <p className="explanationStyle card-text">{photoData.explanation}</p>
                    </div>
                </div>
                ${loader}
        </>
    );
}