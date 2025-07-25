import { FCProps, HtmlProps } from '@/types';
import { VectorPink, VectorPurple } from './vectors';

export const FooterCandy: FCProps<HtmlProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      aria-hidden='true'
      className={`absolute -z-10 h-dvh w-dvw content-width bottom-0 blur-[5rem] overflow-hidden ${className}`}
      {...props}
    >
      <VectorPink className='absolute bottom-0 left-0' />
      <VectorPurple className='absolute bottom-0 right-0' />
    </div>
  );
};
