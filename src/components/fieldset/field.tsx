import { FieldProps, Field as HeadlessField } from '@headlessui/react';
import clsx from 'clsx';

export function Field({
  className,
  ...props
}: { className?: string } & Omit<FieldProps, 'as' | 'className'>) {
  return (
    <HeadlessField
      {...props}
      className={clsx(
        className,
        '[&>[data-slot=label]+[data-slot=control]]:mt-3',
        '[&>[data-slot=label]+[data-slot=description]]:mt-1',
        '[&>[data-slot=description]+[data-slot=control]]:mt-3',
        '[&>[data-slot=control]+[data-slot=description]]:mt-3',
        '[&>[data-slot=control]+[data-slot=error]]:mt-3',
        '*:data-[slot=label]:font-medium'
      )}
    />
  );
}
