import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

const h2Class = 'text-lg font-medium leading-tight tracking-tight sm:text-2xl'
const h3Class = 'font-medium leading-tight tracking-tight sm:text-xl'
const pClass = ''
const liClass = 'ml-4'

const tagToClassMapper = {
  h2: h2Class,
  h3: h3Class,
  p: pClass,
  li: liClass,
}

export const Post = () => {
  const { post, title } = useSelector((state: RootState) => state.generator)

  if (post === undefined) {
    return <></>
  }

  return (
    <div className="space-y-8">
      <p className="text-2xl font-bold leading-tight tracking-tight">{title}</p>

      <div className="space-y-8">
        {post.map((item) => {
          if (item.type !== 'li') {
            return (
              <item.type
                // @ts-expect-error
                key={item.value}
                className={tagToClassMapper[item.type]}
              >
                {item.value}
              </item.type>
            )
          }

          if (item.type === 'li') {
            return (
              <ul key={item.value[0]} className="list-disc space-y-2">
                {(item.value as string[]).map((liItem) => (
                  <li key={liItem} className="ml-4">
                    {liItem}
                  </li>
                ))}
              </ul>
            )
          }
        })}
      </div>
    </div>
  )
}
