import * as Headless from '@headlessui/react';
import clsx from 'clsx';

export function DropdownShortcut({
  keys,
  className,
  ...props
}: { keys: string | string[]; className?: string } & Omit<
  Headless.DescriptionProps<'kbd'>,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      as='kbd'
      {...props}
      className={clsx(
        className,
        'col-start-5 row-start-1 flex justify-self-end'
      )}
    >
      {(Array.isArray(keys) ? keys : keys.split('')).map((char, index) => (
        <kbd
          key={index}
          className={clsx([
            'min-w-[2ch] text-center font-sans text-zinc-400 capitalize group-data-focus:text-white forced-colors:group-data-focus:text-[HighlightText]',
            // Make sure key names that are longer than one character (like "Tab") have extra space
            index > 0 && char.length > 1 && 'pl-1',
          ])}
        >
          {char}
        </kbd>
      ))}
    </Headless.Description>
  );
}
