import './index.css'
import QueryProvider from './components/providers/QueryProvider'
import RouterProvider from './components/providers/RouterProvider'
import RecentTemperatureReadingsProvider from './components/providers/RecentTemperatureReadingsProvider'

const App = () => {
  return (
    <QueryProvider>
      <RecentTemperatureReadingsProvider>
        <RouterProvider />
      </RecentTemperatureReadingsProvider>
    </QueryProvider>
  )
}

export default App
