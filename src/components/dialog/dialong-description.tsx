import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import { Text } from '../text/text';

export function DialogDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps<typeof Text>,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      as={Text}
      {...props}
      className={clsx(className, 'mt-2 text-pretty')}
    />
  );
}
