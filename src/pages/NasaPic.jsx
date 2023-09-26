import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ImageCard from '../components/ImageCard';

const NasaDailyPhoto = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        const apiKey = '6d4TemCfOwXd3hPtV5tijHhMJvp3dw2SK5c5p86q';
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setPhotoData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="min-h-screen py-5 lg:py-0 bg-black mx-auto px-4 lg:px-0 container">
            <div className="">
                <Navbar />
            </div>
            {photoData ? (
                <div className="p-4">
                    <div className="flex flex-col lg:flex-row gap-x-2 text-white border-2 p-8 rounded-lg">
                        <ImageCard
                            title={photoData.title}
                            info={photoData.explanation}
                            image={photoData.url} />
                    </div>
                    <p className='text-white mt-10 flex text-center justify-center font-semibold text-xl'>The above information is received from Nasa's daily photo API.</p>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};


export default NasaDailyPhoto;


