// /pages/show-schools.jsx
import React from 'react';

export default function ShowSchoolsPage({ schools }) {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">All Schools</h1>
        {schools.length === 0 ? (
          <p className="text-center text-gray-500">No schools found. Add one to see it here!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schools.map((school) => (
              <div key={school.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">{school.image}</span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate">{school.name}</h2>
                  <p className="text-gray-600 text-sm mt-1 truncate">{school.address}</p>
                  <p className="text-gray-600 text-sm truncate">{school.city}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Build the absolute URL for the API endpoint
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const apiUrl = `${protocol}://${host}/api/schools`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) { throw new Error('Failed to fetch'); }
    const { data } = await res.json();
    return { props: { schools: data || [] } };
  } catch (error) {
    console.error("Failed to fetch schools:", error);
    return { props: { schools: [] } };
  }
}