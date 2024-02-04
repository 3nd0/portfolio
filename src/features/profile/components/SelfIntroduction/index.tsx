import Image from 'next/image'
import { memo } from 'react'
import type { ProfileType } from './types'

const SelfIntroduction = ({
  name,
  nameEn,
  birthDay,
  birthPlace,
  hobby,
  imageUrl,
}: ProfileType): JSX.Element => {
  return (
    <div className="mx-72 px-10 my-24 flex flex-row">
      <div>
        <Image
          src={imageUrl}
          alt="ID photo"
          width={120}
          height={120}
          priority
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col pl-7 gap-4">
        <div className="flex flex-row gap-4 items-end">
          <p className="font-sans text-2xl font-bold">{name}</p>
          <p className="font-sans text-sm">{nameEn}</p>
        </div>
        <p className="font-sans">生年月日: {birthDay}</p>
        <p className="font-sans">出身地: {birthPlace}</p>
        <p className="font-sans">趣味: {hobby}</p>
      </div>
    </div>
  )
}

export default memo(SelfIntroduction)
