import { FCProps, SvgProps } from '@/types';

import * as Icons from './icons';

const iconList = {
  arrowInCircle: Icons.ArrowInCircle,
} as const;

type Props = { iconName: keyof typeof iconList };

export const Icon: FCProps<SvgProps & Props> = ({
  iconName,
  className = '',
  ...props
}) => {
  const IconComponent = iconList[iconName];
  return <IconComponent {...props} className={className} />;
};
