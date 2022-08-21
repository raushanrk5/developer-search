import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF ,faInstagram, faLinkedin, faPinterestP, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="text-center text-white bg-purple-300">
        <div className="container mx-auto pt-3">
            <div className="flex justify-center mb-3">
            <a href="#!" className="mr-9 text-gray-800">
                <FontAwesomeIcon icon={ faFacebookF } />
            </a>
            <a href="#!" className="mr-9 text-gray-800">
                <FontAwesomeIcon icon={ faInstagram } />
            </a>
            <a href="#!" className="mr-9 text-gray-800">
                <FontAwesomeIcon icon={ faTwitterSquare } />
            </a>
            <a href="#!" className="mr-9 text-gray-800">
                <FontAwesomeIcon icon={ faLinkedin }/>
            </a>
            <a href="#!" className="text-gray-800">
                <FontAwesomeIcon icon={ faPinterestP } />
            </a>
            </div>
        </div>
        
        <div class="relative flex mx-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="text-center text-gray-700 p-2">
            © 2022 Copyright 
            <a className="text-gray-800" href=""> DevSearch </a>
            All Rights Reserved
        </div>

        <div className="text-center text-gray-700 pt-1 pb-4">
            Powered by team
        </div>
        </footer>
    )
}

export default Footer;
