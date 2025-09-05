// /pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    // Main container with a background image
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Semi-transparent overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="rounded-xl bg-white/20 p-8 text-center shadow-lg backdrop-blur-md">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            School Management Portal
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-200">
            A mini-project to add and display school information seamlessly.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Link to the "Add School" page */}
            <Link
              href="/add-school" 
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add a New School
            </Link>

            {/* Link to the "Show Schools" page */}
            <Link
              href="/show-schools" 
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z" />
              </svg>
              Show All Schools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}