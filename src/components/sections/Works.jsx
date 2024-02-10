"use client"
import React, { useState, useEffect } from 'react';

export async function fetchWorks() {
  const csv = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQiby8XsxQCTqdYcwqSC6yCkF8Sr2Ya9iKN3jIsK6rce5Aou3Ag0i0a4fcDFSqfYZdCz1kusJX-H6VH/pub?output=csv", { next: { revalidate: 20 } })
    .then((res) => res.text());

  return csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [description, url_image] = row.split(",");
      return { description, url_image };
    });
}

const Carousel = () => {
  const [works, setWorks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWorks();
        setWorks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, works]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!works || works.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <section className="container mx-auto px-4 md:px-6 my-16 pb-12">
        <div className="bg-gradient-to-r from-[#3f5efb] to-[#46fcb1] ">
          <h2 className="text-3xl font-bold text-center text-white mb-6" id="trabajos">Trabajos realizados</h2>
        </div>
        <div className="w-full mx-auto mt-8 relative overflow-hidden">
          <div className="flex transition-transform ease-in-out duration-300 transform">
            {works.map((work, index) => (
              <div
                key={index}
                className={`w-full ${index === currentIndex ? '' : 'hidden'}`}
                style={{ height: '600px' }}
              >
                {index === currentIndex && (
                  <>
                    <img src={work.url_image} alt={`Slide ${index + 1}`} className="w-full h-full object-fill" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                      {work.description}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
            <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length)} className="text-white hover:text-gray-300 px-4">
              &#8592;
            </button>
            <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length)} className="text-white hover:text-gray-300 px-4">
              &#8594;
            </button>
          </div>
        </div>
      </section >
    </>
  );
};

export default Carousel;
