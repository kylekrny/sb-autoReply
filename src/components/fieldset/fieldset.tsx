import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function Fieldset({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldsetProps, 'as' | 'className'>) {
  return (
    <Headless.Fieldset
      {...props}
      className={clsx(
        className,
        '*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6'
      )}
    />
  );
}
