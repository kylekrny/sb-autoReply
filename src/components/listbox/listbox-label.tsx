import clsx from 'clsx';

export function ListboxLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        'ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0'
      )}
    />
  );
}
