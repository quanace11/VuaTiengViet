import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { ClerkProvider } from '@clerk/clerk-react';

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// console.log(PUBLISHABLE_KEY);
// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key');
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={'pk_test_bmljZS1zaGluZXItMS5jbGVyay5hY2NvdW50cy5kZXYk'}
      afterSignOutUrl="/"
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
