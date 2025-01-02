import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full'>
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className='mx-auto max-w-3xl h-full flex flex-col justify-center align-start'>
        <h1 className='text-4xl'>404 page not found</h1>
        <Link
          to='/'
          className='font-medium mt-2 text-lg text-blue-500 hover:text-blue-400'
        >
          Go home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
