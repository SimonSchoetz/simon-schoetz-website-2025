import { FCProps, SvgProps } from '@/types';

import * as Icons from './icons';

const iconList: Record<string, FCProps<SvgProps>> = {
  arrowInCircle: Icons.ArrowInCircle,
};

type Props = { iconName: keyof typeof iconList };

export const Icon: FCProps<SvgProps & Props> = ({
  iconName,
  className = '',
  ...props
}) => {
  const IconComponent = iconList[iconName];
  return <IconComponent {...props} className={className} />;
};
