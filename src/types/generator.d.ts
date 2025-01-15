export interface PlanSection {
  children: PlanSection[]
  id: string
  level: 1 | 2 | 3
  title: string
}
