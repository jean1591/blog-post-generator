'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'What is the purpose of an article generator app?',
    answer:
      'Our app is designed to help you create high-quality articles effortlessly. From generating attention-grabbing titles to building a custom structure and producing a complete article, we simplify the entire writing process so you can focus on your ideas and creativity.',
  },
  {
    question: 'How does the article generation process work?',
    answer:
      'It’s simple! Start by entering your topic or idea, then choose from a list of AI-generated titles. Customize your table of contents to fit your needs, and finally, let the AI generate a polished article in seconds.',
  },
  {
    question: 'Is the content original and plagiarism-free?',
    answer:
      'Absolutely! Our AI generates unique content every time you create an article. You can rest assured that the articles are plagiarism-free and ready for publication.',
  },
  {
    question: 'Who can benefit from using this app?',
    answer:
      'Our app is perfect for bloggers, marketers, students, and anyone looking to produce articles quickly and efficiently. Whether you need engaging blog posts, professional articles, or educational content, we’ve got you covered.',
  },
  {
    question: 'Can I use the generated articles for SEO purposes?',
    answer:
      'Yes! The content generated is optimized to help improve your SEO efforts. From compelling titles to well-structured outlines, the articles are designed to attract readers and boost search engine rankings.',
  },
  {
    question: 'What topics can the app handle?',
    answer:
      'Our app can handle a wide variety of topics across industries. Whether it’s technology, lifestyle, business, education, or something niche, the AI adapts to your input and produces relevant content.',
  },
  {
    question: 'Is the app free to use?',
    answer:
      'Yes, the app is completely free to use without any limits. You can access all features, generate as many articles as you want, and enjoy the full experience at no cost.',
  },
]

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-4 lg:px-0">
      <h2 className="bg-gradient-to-t from-cyan-700 to-cyan-300 bg-clip-text text-center text-4xl font-bold leading-tight tracking-tight text-transparent">
        Frequently asked questions
      </h2>

      <div className="space-y-8">
        {faqItems.map((item, index) => (
          <div
            key={item.question}
            onClick={() => setActiveIndex(index)}
            className="space-y-4"
          >
            <h2 className="border-b border-cyan-900 pb-2 font-bold">
              {item.question}
            </h2>
            {activeIndex === index && <p className="">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
