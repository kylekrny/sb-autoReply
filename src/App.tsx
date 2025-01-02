import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center'>
      <h1 className='text-8xl font-light'>
        <span className='font-bold'>KRNY </span>
        Digital
      </h1>
    </div>
  );
}

export default App;
