export interface PlanItem {
  children: PlanItem[]
  id: string
  level: 1 | 2 | 3
  title: string
}
