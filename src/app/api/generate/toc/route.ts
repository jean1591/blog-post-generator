import { NextRequest, NextResponse } from 'next/server'

import { PlanSection } from '@/types/generator'

const toc: PlanSection[] = [
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

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { title }: { title: string } = await request.json()

  return NextResponse.json({ toc })
}
