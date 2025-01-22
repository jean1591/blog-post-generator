import {
  setSelectedTabIndex,
  setTitle,
  setTitles,
  setToc,
} from '@/store/features/generate/slice'
import { useDispatch, useSelector } from 'react-redux'

import { PiCaretRight } from 'react-icons/pi'
import { PlanSection } from '@/types/generator'
import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'

const fetchTitles = async (topic: string): Promise<{ titles: string[] }> => {
  const response = await fetch(`/api/generate/titles`, {
    method: 'POST',
    body: JSON.stringify({
      topic,
    }),
    headers: { 'Content-Type': 'application/json' },
  })

  return response.json()
}

const fetchToc = async (title: string): Promise<{ toc: PlanSection[] }> => {
  const response = await fetch(`/api/generate/toc`, {
    method: 'POST',
    body: JSON.stringify({
      title,
    }),
    headers: { 'Content-Type': 'application/json' },
  })

  return response.json()
}

export const Ideas = () => {
  return (
    <div className="space-y-16">
      <TitleInput />
      <TitleIdeas />
    </div>
  )
}

const TitleInput = () => {
  const dispatch = useDispatch()
  const [topic, setTopic] = useState<string>('')

  const handleOnClick = async () => {
    if (topic !== '') {
      const { titles } = await fetchTitles(topic)
      dispatch(setTitles(titles))
      setTopic('')
    }
  }

  return (
    <div>
      <p className="text-2xl font-bold leading-tight tracking-tight">
        Title generator
      </p>

      <p className="mt-8">
        Briefly write about your article's topic, we'll generate title for you
      </p>
      <textarea
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
        className="mt-2 h-24 w-full rounded-lg bg-gray-50 p-2 text-sm font-medium leading-tight tracking-tight ring-1 ring-gray-300"
      />

      <button
        disabled={topic === ''}
        onClick={handleOnClick}
        className="mt-8 w-full rounded-xl bg-cyan-900 p-4 leading-tight tracking-tight text-cyan-50 transition-colors duration-300 ease-in-out disabled:bg-gray-100 disabled:text-gray-500 disabled:ring-1 disabled:ring-gray-300"
      >
        Generate titles
      </button>
    </div>
  )
}

const TitleIdeas = () => {
  const dispatch = useDispatch()
  const { titles } = useSelector((state: RootState) => state.generator)

  const handleOnChange = async (index: number) => {
    const { toc } = await fetchToc(titles[index])
    dispatch(setTitle(titles[index]))
    dispatch(setToc(toc))

    dispatch(setSelectedTabIndex(1))
  }

  if (titles.length === 0) {
    return <></>
  }

  return (
    <div className="mt-16">
      <p className="text-2xl font-semibold leading-tight tracking-tight">
        Titles idea
      </p>

      <ul className="mt-8 space-y-2">
        {titles.map((title, index) => (
          <li
            onClick={() => handleOnChange(index)}
            key={index}
            className={classNames(
              'flex cursor-pointer items-start justify-between rounded-2xl bg-gray-100 p-4 transition-colors duration-300 ease-in-out md:p-8'
            )}
          >
            <div className="space-y-2">
              <p className="font-medium leading-tight tracking-tight">
                {title}
              </p>
              <p className="font-light text-gray-500">
                Title idea #{index + 1}
              </p>
            </div>

            <div className="rounded-md border bg-gray-50 p-2">
              <PiCaretRight className="h-5 w-5" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
