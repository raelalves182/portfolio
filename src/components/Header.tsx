"use client"

import React from 'react';
import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

const Header = () => {
  return (
    <header className="flex items-center h-auto w-full bg-[#090A0B]">
      <div className="container max-w-6xl px-6 m-auto shadow-3xl">
        <nav className="flex justify-between py-6">
          <div className="text-white text-2xl">
            <Link title="israelalves" href="/">
              IsraelAlves
            </Link>
          </div>

          <ul className="flex items-center gap-6">
            <li>
              <Link title="github" href="https://github.com/raelalves182" target="_blank">
                <GithubLogo size={24} color="white" />
              </Link>
            </li>
            <li>
              <Link title="linkedin" href="https://www.linkedin.com/in/israel-alves-dev" target="_blank">
                <LinkedinLogo size={24} weight="fill" color="white" />
              </Link>
            </li>
            <li>
              <Link title="twitter" href="https://twitter.com/IsraelAlves182" target="_blank">
                <TwitterLogo size={24} weight="fill" color="white" />
              </Link>
            </li>
            <li>
              <Link title="instagram" href="https://www.instagram.com/_israelalves" target="_blank">
                <InstagramLogo size={24} weight="fill" color="white" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;