import { Client } from '../dashboard/client';
import Link from 'next/link';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Exploring React's use() Function
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Loading data...
          </p>

          <div className="space-y-8">
            {/* Loading indicator for use() function */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Loading Data</h2>
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
