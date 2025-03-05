import { Button } from '../button/button';
import clsx from 'clsx';

export function PaginationNext({
  href = null,
  className,
  children = 'Next',
}: React.PropsWithChildren<{ href?: string | null; className?: string }>) {
  return (
    <span className={clsx(className, 'flex grow basis-0 justify-end')}>
      <Button
        {...(href === null ? { disabled: true } : { href })}
        plain
        aria-label='Next page'
      >
        {children}
        <svg
          className='stroke-current'
          data-slot='icon'
          viewBox='0 0 16 16'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
    </span>
  );
}
