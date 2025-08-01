import { FCProps, HtmlProps } from '@/types';

import * as Icons from './icons';

const iconList = {
  arrowInCircle: Icons.ArrowInCircle,
  upInCircle: Icons.UpInCircle,
  navArrow: Icons.NavArrow,
  nameCircle: Icons.NameCircle,
  closeX: Icons.CloseX,
} satisfies Record<string, React.FC<HtmlProps<'svg'>>>;

type Props = { iconName: keyof typeof iconList };

export const Icon: FCProps<HtmlProps<'svg'> & Props> = ({
  iconName,
  className,
  ...props
}) => {
  const IconComponent = iconList[iconName];
  return <IconComponent {...props} className={className} />;
};
