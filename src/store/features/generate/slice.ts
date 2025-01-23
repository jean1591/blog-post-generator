import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PlanSection, PostItem } from '@/types/generator'

export interface GeneratorSlice {
  isLoadingTitles: boolean
  plan: PlanSection[]
  post: PostItem[] | undefined
  selectedTabIndex: number
  titles: string[]
  title: string | undefined
  topic: string | undefined
}

const initialState: GeneratorSlice = {
  isLoadingTitles: false,
  plan: [],
  post: undefined,
  selectedTabIndex: 0,
  titles: [],
  title: undefined,
  topic: undefined,
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
    setPost: (state, action: PayloadAction<PostItem[]>) => {
      state.post = action.payload
    },
    setSelectedTabIndex: (state, action: PayloadAction<number>) => {
      state.selectedTabIndex = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setTitles: (state, action: PayloadAction<string[]>) => {
      state.titles = action.payload
    },
    setToc: (state, action: PayloadAction<PlanSection[]>) => {
      state.plan = action.payload
    },
    setTopic: (state, action: PayloadAction<string>) => {
      state.topic = action.payload
    },
    toggleIsLoadingTitle: (state) => {
      state.isLoadingTitles = !state.isLoadingTitles
    },
  },
})

export const {
  addNewSection,
  deleteSectionFromPlan,
  setPost,
  setSelectedTabIndex,
  setTitle,
  setTitles,
  setToc,
  setTopic,
  toggleIsLoadingTitle,
} = generatorSlice.actions

export default generatorSlice.reducer
