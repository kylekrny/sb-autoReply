import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function AlertDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps<'p'>,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      as='p'
      {...props}
      className={clsx(className, 'mt-2 text-center text-pretty sm:text-left')}
    />
  );
}
