import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function DropdownDescription({
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
        'col-span-2 col-start-2 row-start-2 text-sm/5 text-zinc-500 group-data-focus:text-white sm:text-xs/5 dark:text-zinc-400 forced-colors:group-data-focus:text-[HighlightText]'
      )}
    />
  );
}
