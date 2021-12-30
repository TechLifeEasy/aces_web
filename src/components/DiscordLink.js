import React from "react";

const DiscordLink = () => {
  return (
    <div className="mb-14 dark:text-white">
      <div className="text-center w-full mx-auto 0">
        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
          <span className="block dark:text-white mb-5">Want to be part of ACES-NIRMA?</span>
          <span className="block text-indigo-500 dark:text-sky-500">Join Our Discord Server</span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              <a href="https://discord.gg/h7xHS7PFBj" target="_blank">Join Us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiscordLink;
