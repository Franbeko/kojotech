import { cn } from '../../utils/cn';

export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('shell', className)} {...rest}>
      {children}
    </Tag>
  );
}