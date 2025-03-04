import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function AlertTitle({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DialogTitleProps,
  'as' | 'className'
>) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(
        className,
        'text-center text-base/6 font-semibold text-balance text-zinc-950 sm:text-left sm:text-sm/6 sm:text-wrap dark:text-white'
      )}
    />
  );
}
