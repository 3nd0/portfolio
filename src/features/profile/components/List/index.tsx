import Link from 'next/link'
import { company } from '@/const/company'

const List = (): JSX.Element => {
  return (
    <ul>
      {company.map((post, id) => (
        <li key={id} className="relative rounded-md p-3 hover:bg-gray-100">
          <h3 className="text-sm font-medium leading-5 text-black">
            {post.title}
          </h3>

          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
            <li>{post.location}</li>
          </ul>

          <Link
            href={post.url}
            className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
          />
        </li>
      ))}
    </ul>
  )
}

export default List
