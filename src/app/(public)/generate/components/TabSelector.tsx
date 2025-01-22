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
    <div className="grid grid-cols-3">
      <Tab selectedTabIndex={selectedTabIndex} tabIndex={0} title="Ideas" />
      <Tab
        selectedTabIndex={selectedTabIndex}
        tabIndex={1}
        title="Table of content"
      />
      <Tab selectedTabIndex={selectedTabIndex} tabIndex={2} title="Post" />
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
        selectedTabIndex === tabIndex ? 'border-cyan-900' : 'border-gray-50',
        'border-b-4 py-1 font-medium'
      )}
    >
      {title}
    </button>
  )
}
