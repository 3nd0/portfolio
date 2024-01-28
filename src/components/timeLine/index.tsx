import { Fragment } from 'react'
import type { TimeLine } from './type'
import Link from 'next/link'

const TimeLine = (props: { timeLine: TimeLine[] }): JSX.Element => {
  const { timeLine } = props
  return (
    <ol className="relative border-s border-gray-200">
      {timeLine.map((contents, id) => (
        <Fragment key={id}>
          <li className="my-5 ms-4">
            {/* pointer */}
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>

            {/* date section */}
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              {contents.date}
            </time>

            {/* title section */}
            <h3 className="text-lg font-semibold text-gray-900 text-gray">
              {contents.title}
            </h3>

            {/* description section */}
            <p className="mb-4 text-base font-normal text-gray-500 ">
              {contents.description}
            </p>

            {/* anchor */}
            <Link
              href="/detail"
              className='"inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
            >
              Learn more
            </Link>
          </li>
        </Fragment>
      ))}
    </ol>
  )
}

export default TimeLine
