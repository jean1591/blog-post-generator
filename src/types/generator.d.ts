export interface PlanSection {
  children: PlanSection[]
  id: string
  level: 1 | 2 | 3
  title: string
}

export interface PostItem {
  type: 'h2' | 'h3' | 'p' | 'li'
  value: string | string[]
}
