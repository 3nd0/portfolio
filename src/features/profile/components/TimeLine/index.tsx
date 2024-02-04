import { Fragment } from 'react'
import Disclosures from '../Disclosures'

import type { TimeLineType } from './type'
import type { DisclosuresType } from '../Disclosures/type'

const TimeLine = (props: { timeLine: TimeLineType[] }): JSX.Element => {
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
            <p className="mb-4 text-base font-normal text-gray-500 whitespace-pre-wrap">
              {contents.description}
            </p>

            {/* disclosure */}
            <div className="w-full max-w-md rounded-2xl bg-white p-2">
              {contents.detail.map((element: DisclosuresType, id: number) => (
                <Fragment key={id}>
                  <Disclosures {...element} />
                </Fragment>
              ))}
            </div>
          </li>
        </Fragment>
      ))}
    </ol>
  )
}

export default TimeLine
