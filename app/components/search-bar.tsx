import { Form, useNavigate, useSearchParams } from '@remix-run/react';
import { sortOptions } from '~/utils/constants';
import SelectBox from './select-box';

export default function SearchBar() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const clearFilters = () => {
    searchParams.delete('filter');
    searchParams.delete('sort');
    navigate('/home');
  };

  return (
    <Form className="w-full px-6 flex items-center gap-x-4 border-b-4 border-b-blue-400 border-opacity-30 h-20">
      <div className={`flex items-center w-2/5`}>
        <input
          type="text"
          name="filter"
          className="w-full rounded-xl px-3 py-2"
          placeholder="Search a message or name..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400 -ml-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <SelectBox
        className="w-full rounded-xl px-3 py-2 text-gray-400"
        containerClassName="w-40"
        name="sort"
        options={sortOptions}
      />
      <button
        type="submit"
        className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
      >
        Search
      </button>
      {searchParams.get('filter') && (
        <button
          onClick={clearFilters}
          className="rounded-xl bg-red-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1"
        >
          Clear Filters
        </button>
      )}
    </Form>
  );
}
