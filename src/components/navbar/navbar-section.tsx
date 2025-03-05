import clsx from 'clsx';
import { LayoutGroup } from 'framer-motion';
import React, { useId } from 'react';

export function NavbarSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId();

  return (
    <LayoutGroup id={id}>
      <div {...props} className={clsx(className, 'flex items-center gap-3')} />
    </LayoutGroup>
  );
}
