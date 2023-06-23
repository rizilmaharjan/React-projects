import Joke from "./pages/Joke"
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
  }
});
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Joke />
      </QueryClientProvider>
    </>
  );
};

export default App;
