import { Label as HeadlessLabel, LabelProps } from '@headlessui/react';
import clsx from 'clsx';

export function Label({
  className,
  ...props
}: { className?: string } & Omit<LabelProps, 'as' | 'className'>) {
  return (
    <HeadlessLabel
      data-slot='label'
      {...props}
      className={clsx(
        className,
        'text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white'
      )}
    />
  );
}
