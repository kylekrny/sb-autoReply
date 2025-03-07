import { useState, lazy, Suspense } from 'react';
import { submitWaitlistForm } from '../api/email-signup';

const ChatBubbleOvalLeftIcon = lazy(() =>
  import('@heroicons/react/24/outline').then((module) => ({
    default: module.ChatBubbleOvalLeftIcon,
  }))
);

const CheckCircleIcon = lazy(() =>
  import('@heroicons/react/24/outline').then((module) => ({
    default: module.CheckCircleIcon,
  }))
);

export default function Hero() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitWaitlistForm(email)
      .then((status) => {
        if (status) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div className='bg-gray-800 w-full h-full'>
      <div className='absolute flex text-gray-300 pt-5 pl-5'>
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBubbleOvalLeftIcon className='w-6 h-6 mr-2' />
        </Suspense>
        <span>SB AutoReply</span>
      </div>
      <div className='overflow-hidden relative isolate w-full h-full'>
        <svg
          aria-hidden='true'
          className='absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        >
          <defs>
            <pattern
              x='50%'
              y={-1}
              id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
              width={200}
              height={200}
              patternUnits='userSpaceOnUse'
            >
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-800/20'>
            <path
              d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
            width='100%'
            height='100%'
            strokeWidth={0}
          />
        </svg>
        <div className='mx-auto max-w-7xl h-full'>
          <div className='mx-auto max-w-2xl h-full flex flex-col justify-center'>
            <div className='text-center'>
              <h1 className='text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl'>
                Auto-reply to missed calls. Keep business{' '}
                <span className='relative whitespace-nowrap text-orange-500'>
                  <svg
                    aria-hidden='true'
                    viewBox='0 0 418 42'
                    className='absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500/70'
                    preserveAspectRatio='none'
                  >
                    <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
                  </svg>
                  <span className='relative'>moving.</span>
                </span>
              </h1>
              <p className='mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8'>
                SB AutoReply automatically texts back missed callers so you
                never lose a lead. Simple setup, no number porting required.
              </p>
              <div className='mt-10 flex flex-col items-center text-white justify-center gap-x-6'>
                <h6>Join the waitlist for early access!</h6>
                {success ? (
                  <div className='mx-auto mt-6 flex max-w-md gap-x-4'>
                    <Suspense fallback={<div>Loading...</div>}>
                      <CheckCircleIcon className='w-6 h-6 text-green-500' />
                    </Suspense>
                    <p className='text-sm text-green-500'>
                      Thanks for joining the waitlist!
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className='mx-auto mt-6 flex max-w-md gap-x-4'
                  >
                    <label htmlFor='email-address' className='sr-only'>
                      Email address
                    </label>
                    <input
                      id='email-address'
                      name='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='Enter your email'
                      autoComplete='email'
                      className='min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6'
                    />
                    <button
                      type='submit'
                      className='flex-none rounded-md bg-orange-500 px-5 py-3.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                    >
                      Notify me
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
