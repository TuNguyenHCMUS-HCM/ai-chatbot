import { signIn } from 'next-auth/react';

export function MicrosoftButton() {
  return (
    <button
      onClick={() => signIn('azure-ad')}
      className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23 23"
        width="20"
        height="20"
        fill="#F25022"
      >
        <path d="M1 1h10v10H1z" />
        <path d="M1 12h10v10H1z" fill="#00A4EF" />
        <path d="M12 1h10v10H12z" fill="#7FBA00" />
        <path d="M12 12h10v10H12z" fill="#FFB900" />
      </svg>
      <span>Continue with Microsoft</span>
    </button>
  );
} 