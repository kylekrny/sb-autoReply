import { createContext } from 'react';
import { TableHead } from './table-head';
import { TableCell } from './table-cell';
import { TableBody } from './table-body';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import { Table } from './table';

export const TableContext = createContext<{
  bleed: boolean;
  dense: boolean;
  grid: boolean;
  striped: boolean;
}>({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
});

export const TableRowContext = createContext<{
  href?: string;
  target?: string;
  title?: string;
}>({
  href: undefined,
  target: undefined,
  title: undefined,
});

export { Table, TableHead, TableCell, TableBody, TableHeader, TableRow };
