import React from "react";
import image from "../assets/heroimage.svg";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const HeroContent = () => {
  return (
    <div className=" flex flex-col  lg:pt-0 lg:flex-col lg:pb-0 mb-5">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto md:mx-20 lg:px-8 lg:max-w-screen-xl ">
        <div className="flex flex-col items-center w-full justify-center mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            {/* <h1 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              ACES NIRMA
            </h1> */}
            {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none underline">
              From Ideas to Innovation
            </h2> */}
            <div className="flex items-center justify-center text-center">
              

                <Zoom top>
                <img src="/image/Logo.png"  className="w-20 h-20 ml-5" alt="logo"></img>
                </Zoom> 
            </div>

            <div className="text-2xl font-serif  py-3 rounded-2xl ml-5">

            Association of Computer Engineering Students 
            </div>
            
              

               <div className="text-2xl font-serif  py-3 text-center rounded-2xl ml-5">
                   
              
                 <Typewriter 
                    onInit={(typewriter)=>{
                        typewriter.typeString("Why to Join this Club?").pause(2000).deleteAll()
                        .typeString("You’ll learn more about yourself.").pause(2000).deleteAll()
                        .typeString("You’ll develop soft skills.").pause(2000).deleteAll().
                        typeString("You’ll learn how to work with a team.").pause(2000).deleteAll().
                        typeString("You’ll get networking opportunities.").pause(2000).deleteAll().
                        typeString("You’ll be able to use the skills you’ve learned in class.").pause(2000).deleteAll().
                        typeString("You’ll gain leadership skills.").pause(2000).deleteAll().
                        typeString("You’ll get a break from your studies.").pause(2000).deleteAll().
                        typeString(" You’ll expand your resume.").pause(2000).deleteAll().
                        typeString("You’ll be able to give back to the community.").pause(2000).deleteAll().
                        typeString("You’ll have fun!").pause(2000).deleteAll().
                        typeString("We Build a Great Community.").start();
                    }}
                />
                </div>
          </div>
          <div className="flex dark:text-white flex-col items-center md:flex-row w-full justify-center">
           
            <NavLink
              to="/"
            
              className="dark:text-white inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700">
              Learn more
            </NavLink>
          </div>
        </div>
      </div>

      <Fade right>

      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-52 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-48 lg:h-full"
          src={image}
          alt=""
          />
      </div>
          </Fade>
    </div>
  );
};
export default HeroContent;
