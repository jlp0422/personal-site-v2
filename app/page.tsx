import { redirect } from 'next/navigation';

// Root page redirects to /about (same behavior as Gatsby site)
export default function Home() {
  redirect('/about');
}
