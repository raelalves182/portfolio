"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo, List, TwitterLogo } from 'phosphor-react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="flex items-center h-auto w-full bg-[#090A0B]">
      <div className="container max-w-6xl px-6 m-auto shadow-3xl">
        <nav className="relative flex-wrap sm:static flex justify-between py-6">
          <div className="text-white text-2xl flex w-full sm:w-auto justify-between items-center">
            <Link title="israelalves" href="/">
              IsraelAlves
            </Link>

            <button onClick={() => setNavOpen(!navOpen)}
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
            >
              <List size={32} />
            </button>
          </div>

          <div className={"sm:flex flex-grow items-center" + (navOpen ? " flex" : " hidden")} >
            <ul className="flex flex-col sm:flex-row sm:ml-auto sm:gap-6" id="navbar-default">
              <li>
                <Link className="py-2 px-3 flex items-center text-white text-xs uppercase hover:opacity-75" title="github" href="https://github.com/raelalves182" target="_blank">
                  <GithubLogo size={24} color="white" />
                  <span className="ml-2 sm:hidden">Github</span>
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 flex items-center text-white text-xs uppercase hover:opacity-75" title="linkedin" href="https://www.linkedin.com/in/israel-alves-dev" target="_blank">
                  <LinkedinLogo size={24} weight="fill" color="white" />
                  <span className="ml-2 sm:hidden">Linkedin</span>
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 flex items-center text-white text-xs uppercase hover:opacity-75" title="twitter" href="https://twitter.com/IsraelAlves182" target="_blank">
                  <TwitterLogo size={24} weight="fill" color="white" />
                  <span className="ml-2 sm:hidden">Twitter</span>
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 flex items-center text-white text-xs uppercase hover:opacity-75" title="instagram" href="https://www.instagram.com/_israelalves" target="_blank">
                  <InstagramLogo size={24} weight="fill" color="white" />
                  <span className="ml-2 sm:hidden">Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;