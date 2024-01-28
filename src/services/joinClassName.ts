/**
 * tailwindcssの値を結合して返す
 *
 * tailwindcssのclassNameで三項演算子を含めたvalueを生成時に使用
 * @param classes Array<string>
 * @returns string
 */
export function joinClassName(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
