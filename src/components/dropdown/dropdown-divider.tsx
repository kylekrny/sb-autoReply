import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function DropdownDivider({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuSeparatorProps,
  'as' | 'className'
>) {
  return (
    <Headless.MenuSeparator
      {...props}
      className={clsx(
        className,
        'col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]'
      )}
    />
  );
}
