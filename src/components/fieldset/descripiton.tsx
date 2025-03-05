import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function Description({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      data-slot='description'
      {...props}
      className={clsx(
        className,
        'text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400'
      )}
    />
  );
}
