import type { DisclosuresType } from '../Disclosures/type'

/**
 * @property date 日付
 * @property title 表題
 * @property description 説明
 * @property detail 詳細(タイトル, 内容)
 */
export type TimeLineType = {
  date: string
  title: string
  description: string
  detail: DisclosuresType[]
}
