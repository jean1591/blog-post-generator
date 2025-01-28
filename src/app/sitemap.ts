import { MetadataRoute } from 'next'

const baseUrl = 'https://article-generator.jeanrobertou.com'
const changeFrequency = 'monthly'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/generate`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.9,
    },
  ]
}
