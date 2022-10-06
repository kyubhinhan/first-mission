
import DrawCards from './components/DrawCards';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <DrawCards />
    </QueryClientProvider>
  );
}

export default App;
