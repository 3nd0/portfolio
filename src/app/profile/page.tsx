import SelfIntroduction from '@/features/profile/components/SelfIntroduction'
import Tabs from '@/features/profile/components/Tabs'

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
    <div className="flex flex-col mt-20 ml-64 pt-12 gap-10">
      {/* 自己紹介欄 */}
      <SelfIntroduction {...profile} />
      {/* tabs */}
      <div className="mx-72 px-10 flex flex-col">
        <Tabs />
      </div>
    </div>
  )
}
