import { TableContext } from '.';
import { TableRowContext } from '.';
import { Link } from '../link';
import clsx from 'clsx';
import { useContext, useState } from 'react';

export function TableCell({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'td'>) {
  let { bleed, dense, grid, striped } = useContext(TableContext);
  let { href, target, title } = useContext(TableRowContext);
  let [cellRef, setCellRef] = useState<HTMLElement | null>(null);

  return (
    <td
      ref={href ? setCellRef : undefined}
      {...props}
      className={clsx(
        className,
        'relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2))',
        !striped && 'border-b border-zinc-950/5 dark:border-white/5',
        grid &&
          'border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5',
        dense ? 'py-2.5' : 'py-4',
        !bleed && 'sm:first:pl-1 sm:last:pr-1'
      )}
    >
      {href && (
        <Link
          data-row-link
          href={href}
          target={target}
          aria-label={title}
          tabIndex={cellRef?.previousElementSibling === null ? 0 : -1}
          className='absolute inset-0 focus:outline-hidden'
        />
      )}
      {children}
    </td>
  );
}
