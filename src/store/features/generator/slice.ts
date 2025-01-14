import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PlanItem } from '@/types/generator'

const initialPlan: PlanItem[] = [
  {
    children: [
      { children: [], id: '1.1', level: 2, title: 'Importance Of UX Design' },
      {
        children: [
          {
            children: [],
            id: '1.2.1',
            level: 3,
            title: 'Importance Of UX Design',
          },
          { children: [], id: '1.2.2', level: 3, title: 'UX Design Process' },
        ],
        id: '1.2',
        level: 2,
        title: 'UX Design Process',
      },
    ],
    id: '1',
    level: 1,
    title: 'What Is UX Design?',
  },
  {
    children: [],
    id: '2',
    level: 1,
    title: 'How To Write A UX Blog Regarding Problem Identification.',
  },
  {
    children: [
      { children: [], id: '3.1', level: 2, title: 'Importance Of UX Design' },
      {
        children: [
          {
            children: [],
            id: '3.2.1',
            level: 3,
            title: 'Importance Of UX Design',
          },
          { children: [], id: '3.2.2', level: 3, title: 'UX Design Process' },
        ],
        id: '3.2',
        level: 2,
        title: 'UX Design Process',
      },
    ],
    id: '3',
    level: 1,
    title: 'What Is UX Design?',
  },
]

export interface GeneratorSlice {
  plan: PlanItem[]
}

const initialState: GeneratorSlice = {
  plan: initialPlan,
}

const deleteFromItems = (plan: PlanItem[], id: string): PlanItem[] => {
  return plan.filter((item) => {
    if (item.id === id) {
      return false
    }

    if (item.children.length > 0) {
      item.children = deleteFromItems(item.children, id)
    }
    return true
  })
}

export const generatorSlice = createSlice({
  name: 'generatorSlice',
  initialState,
  reducers: {
    deleteItemFromPlan: (state, action: PayloadAction<string>) => {
      const { payload: id } = action
      state.plan = deleteFromItems(state.plan, id)
    },
  },
})

export const { deleteItemFromPlan } = generatorSlice.actions

export default generatorSlice.reducer
