import { NextRequest, NextResponse } from 'next/server'

const titles = [
  'Title 1 Title 1 Title 1 Title 1 Title 1',
  'Title 2 Title 2 Title 2 Title 2',
  'Title 3 Title 3 Title 3 Title 3 Title 3 Title 3',
  'Title 4 Title 4 Title 4 Title 4 Title 4',
]

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { topic }: { topic: string } = await request.json()

  return NextResponse.json({ titles })
}
