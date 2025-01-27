import { NextRequest, NextResponse } from 'next/server'

import OpenAI from 'openai'
import { PlanSection } from '@/types/generator'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

function displayPlanSections(planSections: PlanSection[], level = 1): string {
  return planSections
    .map((section) => {
      const indent = '-'.repeat(section.level)
      const sectionDisplay = `${indent} ${section.title}`

      if (section.children.length > 0) {
        return `${sectionDisplay}\n${displayPlanSections(section.children, section.level + 1)}`
      }

      return sectionDisplay
    })
    .join('\n')
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { nextUrl } = request
  const { title, toc }: { title: string; toc: PlanSection[] } =
    await request.json()

  console.log(
    `[POST] ${nextUrl.pathname}`,
    JSON.stringify({ title, toc }, null, 2)
  )

  const prompt = `Generate a blog post of around 1500 words regarding '${title}'. The post should have the following structure:
  ${displayPlanSections(toc)}

The table of content should be an array of the following PlanSection interface:
interface PostItem {
  type: 'h2' | 'h3' | 'p' | 'li' // html tag used throughout the article
  value: string | string[] // string for h2, h3 and p, string[] for li
}

Provide a JSON response with the following structure:
{
  'post': PostItem[],
}

Goals:
- Optimize article for SEO

Rules:
- Do not capitalize every word, only the first word should be capitalize
- Do not send h1 as the title will act as one
- Respect the language in which the title and table of content are stated

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

  const post = JSON.parse(analysis).post

  return NextResponse.json({ post: post })
}
