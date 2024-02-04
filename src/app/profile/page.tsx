import { lazy } from 'react'
import SelfIntroduction from '@/features/profile/components/SelfIntroduction'

const Tabs = lazy(() => import('@/components/tabs'))

const profile = {
  name: '遠藤 航',
  nameEn: 'Endo Wataru',
  birthDay: '1992/04/30',
  birthPlace: '千葉県',
  hobby: '車, バイク, MTB, 釣り, キャンプ, 料理, 食べ歩き, ゲーム',
  imageUrl: '/image/IMG_0850.jpg',
}

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      {/* 自己紹介欄 */}
      <SelfIntroduction {...profile} />
      {/* tabs */}
      <div className="mx-72 px-10 flex flex-col">
        <Tabs />
      </div>
    </div>
  )
}
