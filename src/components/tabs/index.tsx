'use client'

import { useState, lazy } from 'react'
import { Tab } from '@headlessui/react'
import { joinClassName } from '@/services/joinClassName'
import type { TabCategory } from './type'

const Career = lazy(() => import('@/components/careere'))

const Tabs = (): JSX.Element => {
  let [categories] = useState<TabCategory>({
    Career: <Career />,
  })

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              joinClassName(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-700 shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {Object.values(categories).map(
          (components: JSX.Element, idx: number) => (
            <Tab.Panel
              key={idx}
              className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            >
              {components}
            </Tab.Panel>
          )
        )}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
