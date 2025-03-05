import clsx from 'clsx';

export function PaginationGap({
  className,
  children = <>&hellip;</>,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      aria-hidden='true'
      {...props}
      className={clsx(
        className,
        'w-[2.25rem] text-center text-sm/6 font-semibold text-zinc-950 select-none dark:text-white'
      )}
    >
      {children}
    </span>
  );
}
