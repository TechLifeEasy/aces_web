import React from "react";

import { NavLink } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="px-4  mx-auto mb-14 flex flex-col items-center justify-center">
     
        <h2 className="max-w-lg mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group text-center dark:text-white">
          Our Events
        </h2>
      
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='https://res.cloudinary.com/dcgtilnwq/image/upload/v1640841259/aces/events/IMG_0037_x4mihw.jpg'
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
              <p className="text-sm tracking-wide text-gray-300">
                Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                been dogged by two questions since the day it was made: Who’s
                the subject and why is she smiling?
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://res.cloudinary.com/dcgtilnwq/image/upload/v1640841272/aces/events/20191003_125435_ggob9m.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Starry Night
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Vincent Van Gogh’s most popular painting, The Starry Night was
                created by Van Gogh at the asylum in Saint-Rémy, where he’d
                committed himself in 1889.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://res.cloudinary.com/dcgtilnwq/image/upload/v1640841267/aces/events/IMG_0040_zvm3te.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
              <p className="text-sm tracking-wide text-gray-300">
                Opulently gilded and extravagantly patterned, The Kiss, Gustav
                Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                Symbolism and Vienna Jugendstil, the Austrian variant of Art
                Nouveau.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://res.cloudinary.com/dcgtilnwq/image/upload/v1640841263/aces/events/IMG_20191003_113836_g8mwaf.jpg"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Harvesters
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Bruegel’s fanfare for the common man is considered one of the
                defining works of Western art. This composition was one of six
                created on the theme of the seasons.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center">
        <NavLink
          to="/events"
          
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
          View More
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default EventCard;
