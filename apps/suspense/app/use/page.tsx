import { use } from 'react';
import { Suspense } from 'react';
import { Client } from '../dashboard/client';
import Link from 'next/link';

// Define the type for our data
interface UserData {
  name: string;
  age: number;
  hobbies: string[];
}

// Simulate a slow loading resource
const slowResource = new Promise<UserData>((resolve) => {
  setTimeout(() => {
    resolve({
      name: 'John Doe',
      age: 30,
      hobbies: ['coding', 'reading', 'traveling']
    });
  }, 3000);
});

// Create a custom hook that uses the use() function
function useSlowResource(): UserData {
  const resource = use(slowResource);
  return resource;
}

export default function UsePage() {
  const data = useSlowResource();

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Exploring React's use() Function
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Demonstrating how use() can be used to handle asynchronous data fetching
          </p>

          <div className="space-y-8">
            {/* Using use() directly */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Using use() Function</h2>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>

            {/* Using Suspense with use() */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Using Suspense with use()</h2>
              <Suspense fallback={<div>Loading data...</div>}>
                <div>
                  <p>Name: {data.name}</p>
                  <p>Age: {data.age}</p>
                  <p>Hobbies: {data.hobbies.join(', ')}</p>
                </div>
              </Suspense>
            </div>

            {/* Client component */}
            <Client />

            <div className="mt-8">
              <Link 
                href="/" 
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <svg className="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
