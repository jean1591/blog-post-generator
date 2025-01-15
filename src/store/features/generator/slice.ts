import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PlanSection } from '@/types/generator'

const initialPlan: PlanSection[] = [
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
  plan: PlanSection[]
}

const initialState: GeneratorSlice = {
  plan: initialPlan,
}

const deleteFromSections = (plan: PlanSection[], id: string): PlanSection[] => {
  return plan.filter((section) => {
    if (section.id === id) {
      return false
    }

    if (section.children.length > 0) {
      section.children = deleteFromSections(section.children, id)
    }
    return true
  })
}

const addNewSectionToPlan = (
  plan: PlanSection[],
  id: string,
  title: string
): PlanSection[] => {
  return plan.map((section) => {
    if (section.id === id) {
      return {
        ...section,
        children: [
          ...section.children,
          {
            children: [],
            id: `${section.id}.${34}`,
            level: 2,
            title,
          },
        ],
      }
    }

    return section
  })
}

export const generatorSlice = createSlice({
  name: 'generatorSlice',
  initialState,
  reducers: {
    addNewSection: (
      state,
      action: PayloadAction<{ title: string; id: string }>
    ) => {
      const {
        payload: { title, id },
      } = action
      state.plan = addNewSectionToPlan(state.plan, id, title)
    },
    deleteSectionFromPlan: (state, action: PayloadAction<string>) => {
      const { payload: id } = action
      state.plan = deleteFromSections(state.plan, id)
    },
  },
})

export const { addNewSection, deleteSectionFromPlan } = generatorSlice.actions

export default generatorSlice.reducer
