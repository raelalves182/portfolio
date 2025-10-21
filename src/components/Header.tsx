"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo, List } from '@phosphor-icons/react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="flex items-center h-auto w-full">
      <div className="container">
        <nav className="relative flex-wrap sm:static flex justify-between py-6">
          <div className="text-neutral-700 text-base font-bold flex w-full sm:w-auto justify-between items-center">
            <Link title="israelalves" href="/">
              IsraelAlves
            </Link>

            <button onClick={() => setNavOpen(!navOpen)}
              className="text-neutral-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded-sm bg-transparent block sm:hidden outline-hidden focus:outline-hidden"
            >
              <List size={32} />
            </button>
          </div>

          <div className={"sm:flex grow items-center" + (navOpen ? " flex" : " hidden")} >
            <ul className="flex flex-col sm:flex-row sm:ml-auto sm:gap-6" id="navbar-default">
              <li>
                <Link className="py-2 px-3 flex items-center text-neutral-700 text-xs uppercase hover:opacity-75" title="github" href="https://github.com/raelalves182" target="_blank">
                  <GithubLogo size={24} color="black" />
                  <span className="ml-2 sm:hidden">Github</span>
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 flex items-center text-neutral-700 text-xs uppercase hover:opacity-75" title="linkedin" href="https://www.linkedin.com/in/israel-alves-dev" target="_blank">
                  <LinkedinLogo size={24} color="black" />
                  <span className="ml-2 sm:hidden">Linkedin</span>
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 flex items-center text-neutral-700 text-xs uppercase hover:opacity-75" title="instagram" href="https://www.instagram.com/_israelalves" target="_blank">
                  <InstagramLogo size={24} color="black" />
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