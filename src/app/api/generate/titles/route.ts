import { NextRequest, NextResponse } from 'next/server'

import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { nextUrl } = request
  const { topic }: { topic: string } = await request.json()

  console.log(`[POST] ${nextUrl.pathname}`, { topic })

  const prompt = `Generate 5 titles for a blog post on '${topic}':

Provide a JSON response with the following structure:
{
  'titles': string[], // Array of post titles
}

Rules:
- Do not capitalize every word, only the first word should be capitalize
- Respect the language in which the topic is stated

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

  const titles = JSON.parse(analysis).titles

  return NextResponse.json({ titles })
}
