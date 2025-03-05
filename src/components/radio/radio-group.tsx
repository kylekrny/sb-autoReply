import {
  RadioGroup as HeadlessRadioGroup,
  RadioGroupProps,
} from '@headlessui/react';
import clsx from 'clsx';

export function RadioGroup({
  className,
  ...props
}: { className?: string } & Omit<RadioGroupProps, 'as' | 'className'>) {
  return (
    <HeadlessRadioGroup
      data-slot='control'
      {...props}
      className={clsx(
        className,
        // Basic groups
        'space-y-3 **:data-[slot=label]:font-normal',
        // With descriptions
        'has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  );
}
