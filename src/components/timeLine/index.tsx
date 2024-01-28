import { Fragment } from 'react'
import type { TimeLine } from './type'

const TimeLine = (props: { timeLine: TimeLine[] }): JSX.Element => {
  const { timeLine } = props
  return (
    <ol className="relative border-s border-gray-200">
      {timeLine.map((contents, id) => (
        <Fragment key={id}>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              {contents.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 text-gray">
              {contents.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              {contents.description}
            </p>
          </li>
        </Fragment>
      ))}
    </ol>
  )
}

export default TimeLine
