import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between content-center items-center border-b border-slate-600 h-20 px-8">
      <div className="basis-1/2">
        <h1 className="font-sans">Portfolio</h1>
      </div>
      <div className="basis-1/2 flex flex-row-reverse gap-4">
        <div>
          <Link href="https://github.com/3nd0/portfolio">
            <Image
              src="/logo/github.svg"
              alt="Github Logo"
              className="dark:invert"
              width={35}
              height={35}
              priority
            />
          </Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/w4.3nd0/">
            <Image
              src="/logo/instagram.svg"
              alt="Github Logo"
              className="dark:invert"
              width={35}
              height={35}
              priority
            />
          </Link>
        </div>
        <div>
          <Link href="https://twitter.com/home">
            <Image
              src="/logo/twitter.svg"
              alt="Github Logo"
              className="dark:invert"
              width={35}
              height={35}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
