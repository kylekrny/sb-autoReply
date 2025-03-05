import clsx from 'clsx';

export function FieldGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot='control'
      {...props}
      className={clsx(className, 'space-y-8')}
    />
  );
}
