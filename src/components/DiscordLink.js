import React from "react";

const DiscordLink = () => {
  return (
    <div class="bg-white">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
          <span class="block">Want to be part of ACES-NIRMA?</span>
          <span class="block text-indigo-500">Join Our Discord Server</span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              <a href="https://discord.gg/h7xHS7PFBj">Join Us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiscordLink;
