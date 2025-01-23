'use client'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { setSelectedTabIndex } from '@/store/features/generate/slice'

export const TabSelector = () => {
  const { selectedTabIndex } = useSelector(
    (state: RootState) => state.generator
  )

  return (
    <div className="grid grid-cols-3 gap-8">
      <Tab selectedTabIndex={selectedTabIndex} tabIndex={0} title="Title" />
      <Tab
        selectedTabIndex={selectedTabIndex}
        tabIndex={1}
        title="Table of content"
      />
      <Tab selectedTabIndex={selectedTabIndex} tabIndex={2} title="Preview" />
    </div>
  )
}

const Tab = ({
  selectedTabIndex,
  tabIndex,
  title,
}: {
  selectedTabIndex: number
  tabIndex: number
  title: string
}) => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(setSelectedTabIndex(tabIndex))}
      className={classNames(
        selectedTabIndex === tabIndex ? 'border-cyan-900' : 'border-gray-200',
        'border-t-4 py-2 text-left'
      )}
    >
      <p className="text-sm text-cyan-900">Step {tabIndex + 1}</p>
      <p className="font-medium">{title}</p>
    </button>
  )
}
