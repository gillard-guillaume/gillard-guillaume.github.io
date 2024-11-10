// src/app/page.tsx
"use client";  // This makes the file a Client Component

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Use this instead of `useRouter`
import SplashScreen from '../components/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the URL has "preview=true" as a query parameter
    if (searchParams.get('preview') === 'true') {
      setShowSplash(false);  // Bypass splash if preview mode is on
    } else {
      // Display the splash screen for 3 seconds
      const timer = setTimeout(() => setShowSplash(false), 60000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      {showSplash ? (
        <SplashScreen />  // Show splash screen if showSplash is true
      ) : (
        <div style={{ padding: "20px" }}>
          <h1>Main Landing Page Content Here</h1>
          <p>This is the actual landing page content.</p>
        </div>
      )}
    </>
  );
}
