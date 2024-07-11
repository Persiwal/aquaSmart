import useRecentTemperatureReadings from '../../hooks/useRecentTemperatureReadings'

interface Props {
  children: React.ReactNode
}

const RecentTemperatureReadingsProvider: React.FC<Props> = ({ children }) => {
  useRecentTemperatureReadings()

  return <>{children}</>
}

export default RecentTemperatureReadingsProvider
