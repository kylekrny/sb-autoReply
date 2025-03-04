import clsx from 'clsx';

export function DropdownHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(className, 'col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3')}
    />
  );
}
