
import FormikForm from './components/formikForm';
import PostsComponent from './components/PostsComponent'; // Import the PostsComponent
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <FormikForm />
        <PostsComponent />
      </div>
      </QueryClientProvider>
  );
}


export default App;
