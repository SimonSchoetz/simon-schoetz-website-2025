import { FCProps, HtmlProps } from '@/types';

export const Header: FCProps<HtmlProps<'header'>> = ({
  children,
  ...props
}) => {
  return (
    <header
      className='w-full sticky top-0 z-50 mb-2 lg:mb-10 px-4 backdrop-blur-md lg:px-8
          xl:px-16'
      {...props}
    >
      {children}
    </header>
  );
};
