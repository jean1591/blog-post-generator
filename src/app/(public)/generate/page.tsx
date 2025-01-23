import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SelectedTab } from './components/SelectedTab'
import { TabSelector } from './components/TabSelector'

export default function Generate() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <div className="mx-auto w-full max-w-3xl flex-1 space-y-8 px-4 py-24 sm:px-6 lg:px-8">
        <TabSelector />
        <SelectedTab />
      </div>

      <Footer />
    </div>
  )
}
