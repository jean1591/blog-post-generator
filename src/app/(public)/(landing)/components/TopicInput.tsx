'use client'

import Link from 'next/link'
import { setTopic } from '@/store/features/generate/slice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export const TopicInput = () => {
  const dispatch = useDispatch()
  const [inputTopic, setInputTopic] = useState<string>('')

  return (
    <div className="flex w-full gap-8">
      <input
        onChange={(e) => setInputTopic(e.target.value)}
        value={inputTopic}
        className="h-12 w-full rounded-lg bg-gray-50 p-2 text-sm leading-tight tracking-tight ring-1 ring-gray-300 md:w-2/3"
        placeholder="Describe your topic"
      />

      <Link
        onClick={() => dispatch(setTopic(inputTopic))}
        className="w-full rounded-xl border-2 border-cyan-50 p-4 text-center font-bold leading-tight tracking-tight text-cyan-50 transition-colors duration-500 ease-in-out hover:bg-cyan-800 md:w-1/3"
        href="/generate"
      >
        Generate blog post
      </Link>
    </div>
  )
}
