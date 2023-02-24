import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-black md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-white sm:text-center dark:text-white">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          TMDB
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm  text-white dark:text-white sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
