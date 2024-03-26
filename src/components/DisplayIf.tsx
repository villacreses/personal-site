import {ReactNode} from 'react';

export default function DisplayIf ({ condition, children }: {condition: any, children: ReactNode}) {
  return !!condition ? children : null;
}
