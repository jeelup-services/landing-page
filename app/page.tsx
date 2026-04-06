// Middleware redirects / → /en — this file is a fallback only.
import { redirect } from 'next/navigation';
export default function RootPage() {
  redirect('/en');
}
