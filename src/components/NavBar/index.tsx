'use client'

import { Fragment, useReducer } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { socialMedia } from '@/const/NavBar/socialMedia'

import type { SocialMediaInfo } from './types'

const SunIcon = dynamic(() => import('@heroicons/react/24/outline/SunIcon'))
const MoonIcon = dynamic(() => import('@heroicons/react/24/outline/MoonIcon'))

const NavBar = (): JSX.Element => {
  const [isDarkMode, isDarkModeDispatch] = useReducer((prev) => !prev, false)
  return (
    <nav className="fixed top-0 start-0 flex flex-row items-center w-full bg-white z-10 border-b border-gray-200 px-8 py-4">
      <div className="basis-1/2 flex flex-row space-x-2">
        <Link href="/">
          <svg
            className="w-[48px] h-[48px] text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2"
            />
          </svg>
        </Link>
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          NavBar
        </span>
      </div>

      <div className="basis-1/2 flex flex-row justify-end space-x-4">
        {/* Dark mode switch */}
        <button
          type="button"
          className="border rounded-lg p-2.5 w-11 h-11"
          onClick={isDarkModeDispatch}
        >
          {isDarkMode ? (
            <MoonIcon width={24} height={24} />
          ) : (
            <SunIcon width={24} height={24} />
          )}
        </button>

        {/* Social Media */}
        {socialMedia.map((contents: SocialMediaInfo, index: number) => (
          <Fragment key={index}>
            <Link href={contents.url}>
              <Image
                src={contents.src}
                alt={contents.description}
                width={35}
                height={35}
                priority
              />
            </Link>
          </Fragment>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
