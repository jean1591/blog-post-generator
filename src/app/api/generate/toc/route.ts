import { NextRequest, NextResponse } from 'next/server'

import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { nextUrl } = request
  const { title }: { title: string } = await request.json()

  console.log(`[POST] ${nextUrl.pathname}`, { title })

  const prompt = `Generate a table of content for a blog post about '${title}'. The blog post should be around 1500 words.

The table of content should be an array of the following PlanSection interface:
interface PlanSection {
  children: PlanSection[] // Section's children if any
  id: string // 1.1, 1.1.1, 1.2 and such
  level: 1 | 2 | 3 // The nested level of the section
  title: string // The title of the section
}

Provide a JSON response with the following structure:
{
  'toc': PlanSection[],
}

Rules:
- Do not capitalize every word, only the first word should be capitalize
- Do not nest lower than level 3
- Respect the language in which the title is stated

Ensure the response is valid JSON and all fields are present.`

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: prompt }],
    model: 'gpt-4o-mini',
    response_format: { type: 'json_object' },
  })

  const { content: analysis } = completion.choices[0].message

  if (!analysis) {
    const today = new Date()
    console.error(`${today.toISOString()} ERROR OPENAI_NO_RESPONSE`, {
      completion,
    })

    throw new Error('OPENAI_NO_RESPONSE')
  }

  const toc = JSON.parse(analysis).toc

  return NextResponse.json({ toc })
}
