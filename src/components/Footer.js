import React from "react";

import { BsFacebook,BsInstagram,BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="full px-4 pt-16 w-screen mx-auto md:px-24 lg:px-8 bg-sky-500 text-white">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 ml-5">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none">
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Niram Univercity -ACES
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-white">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              info@lorem.mail
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white my-3">
            Social
          </span>
          <div className="flex items-center mt-3 space-x-3">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              <BsFacebook size={25}></BsFacebook>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              <BsDiscord size={25}></BsDiscord>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              <BsInstagram size={25}></BsInstagram>
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white ml-5">
          © Copyright 2021 Lorem Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
