import { Fragment } from 'react'
import Link from 'next/link'
import { menuList } from '@/const/sideBar/menuList'

const SideBar = (): JSX.Element => {
  return (
    <aside
      id="side-bar"
      className="fixed top-0 left-0 z-40 w-64 pt-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
    >
      <div className="h-full px-3 py-4 border-e border-gray-200 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuList.map((contents, index: number) => (
            <Fragment key={index}>
              <li>
                <Link
                  href={contents.path}
                  className="flex item-center p-2 text-gray-900 hover:bg-gray-200 rounded-lg group"
                >
                  <span className="ms-3 text-black">{contents.name}</span>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
