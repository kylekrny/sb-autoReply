import clsx from 'clsx';

export function NavbarSpacer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      aria-hidden='true'
      {...props}
      className={clsx(className, '-ml-4 flex-1')}
    />
  );
}
