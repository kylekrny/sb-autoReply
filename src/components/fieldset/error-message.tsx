import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function ErrorMessage({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      data-slot='error'
      {...props}
      className={clsx(
        className,
        'text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500'
      )}
    />
  );
}
