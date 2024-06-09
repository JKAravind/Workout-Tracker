import { Stack } from 'expo-router/stack';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query';

const query = new QueryClient();



export default function AppLayout() {
  return (
    <QueryClientProvider client={query}>
    <Stack>
      <Stack.Screen 
        name="(tabs)" options={{headerShown:false}}/>
    </Stack>
    </QueryClientProvider>
  );
}