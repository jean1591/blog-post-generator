import { Plan } from './components/Plan'
import { TabSelector } from './components/TabSelector'

export default function Generate() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
        <TabSelector />
        <Plan />
      </div>
    </div>
  )
}
