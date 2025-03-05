import * as Headless from '@headlessui/react';
import { Button } from '../button/button';

export function DropdownButton<T extends React.ElementType = typeof Button>({
  as = Button,
  ...props
}: { className?: string } & Omit<Headless.MenuButtonProps<T>, 'className'>) {
  return <Headless.MenuButton as={as} {...props} />;
}
