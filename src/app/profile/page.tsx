import Image from 'next/image'
import Link from 'next/link'
import { lazy } from 'react'

const Tabs = lazy(() => import('@/components/tabs'))

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="mx-72 px-10 my-24 flex flex-row">
        <div>
          <Image
            src="/image/IMG_0850.jpg"
            alt="ID photo"
            width={120}
            height={120}
            priority
            className="rounded-full"
          />
        </div>

        {/* profile */}
        <div className="flex flex-col pl-7 gap-4">
          <div className="flex flex-row gap-4 items-end">
            <p className="font-sans text-2xl font-bold">遠藤 航</p>
            <p className="font-sans text-sm">Endo Wataru</p>
          </div>
          <p className="font-sans">生年月日: 1992/04/30</p>
          <p className="font-sans">出身地: 千葉県</p>
          <p className="font-sans">
            趣味: 車, バイク, MTB, 釣り, キャンプ, 料理, 食べ歩き, ゲーム
          </p>
          {/* social icons */}
          <div className="flex flex-row gap-4">
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

      {/* tabs */}
      <div className="mx-72 px-10 flex flex-col">
        <Tabs />
      </div>
    </div>
  )
}
