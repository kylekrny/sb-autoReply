import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function DropdownLabel({
  className,
  ...props
}: { className?: string } & Omit<Headless.LabelProps, 'as' | 'className'>) {
  return (
    <Headless.Label
      {...props}
      data-slot='label'
      className={clsx(className, 'col-start-2 row-start-1')}
      {...props}
    />
  );
}
