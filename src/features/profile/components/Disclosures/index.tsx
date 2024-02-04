import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import type { DisclosuresType } from './type'

const Disclosures = ({ title, contents }: DisclosuresType) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="w-full px-4 pb-2 pt-4 text-sm text-gray-500 whitespace-pre-wrap">
            {contents}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Disclosures
