import { Legend as HeadlessLegend, LegendProps } from '@headlessui/react';
import clsx from 'clsx';

export function Legend({
  className,
  ...props
}: { className?: string } & Omit<LegendProps, 'as' | 'className'>) {
  return (
    <HeadlessLegend
      data-slot='legend'
      {...props}
      className={clsx(
        className,
        'text-base/6 font-semibold text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white'
      )}
    />
  );
}
