'use client'

import { Ideas } from './Ideas'
import { Post } from './Post'
import { RootState } from '@/store/store'
import { TableOfContent } from './TableOfContent'
import { useSelector } from 'react-redux'

export const SelectedTab = () => {
  const { selectedTabIndex } = useSelector(
    (state: RootState) => state.generator
  )

  if (selectedTabIndex === 0) {
    return <Ideas />
  }

  if (selectedTabIndex === 1) {
    return <TableOfContent />
  }

  if (selectedTabIndex === 2) {
    return <Post />
  }
}
