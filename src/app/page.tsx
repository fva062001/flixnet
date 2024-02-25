'use client';
import React from 'react';
import LandingPage from '@/components/pages/LandingPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

function InitialPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default InitialPage;
