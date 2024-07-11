import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

interface Props {
  children: React.ReactNode
}

const QueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
