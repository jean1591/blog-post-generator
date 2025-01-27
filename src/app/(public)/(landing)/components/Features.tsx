import { PiCursorClickBold, PiGearFineBold, PiPenNibBold } from 'react-icons/pi'

const features = [
  {
    icon: PiCursorClickBold,
    title: 'Pick a title that shines',
    description:
      'Select from a list of engaging, reader-focused titles tailored to your topic. These titles are designed to grab attention and set the tone for your article.',
  },
  {
    icon: PiGearFineBold,
    title: 'Fine-tune your structure',
    description:
      'Easily customize your blog’s table of contents to match your vision. Add, edit, or remove sections to create a seamless reading flow for your audience.',
  },
  {
    icon: PiPenNibBold,
    title: 'Generate your blog post',
    description:
      'Let AI craft a complete, high-quality blog post in seconds, ready for your final touches. The content is tailored to your inputs, ensuring it aligns with your style and goals.',
  },
]

export const Features = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-4 md:px-0">
      <div className="space-y-8">
        <h2 className="bg-gradient-to-t from-cyan-700 to-cyan-300 bg-clip-text text-center text-4xl font-bold leading-tight tracking-tight text-transparent">
          Features that make articles writing effortless
        </h2>

        <div className="flex justify-center">
          <h3 className="w-2/3 text-center text-xl font-medium leading-tight tracking-tight">
            From concept to a fully written article, our app simplifies every
            step, so you can focus on sharing ideas, not stressing over words.
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
        {features.map(({ icon, description, title }) => {
          const Icon = icon

          return (
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-2">
                <Icon className="h-5 w-5 text-cyan-700" />
                <p className="text-lg font-bold leading-tight tracking-tight">
                  {title}
                </p>
              </div>
              <p className="tracking-tight">{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
