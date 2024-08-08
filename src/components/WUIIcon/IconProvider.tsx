import React, {FC, ComponentType, SVGProps} from 'react';

type IconProviderProps = {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

type SvgProps = SVGProps<SVGSVGElement>;

export type IconProps = IconProviderProps & SvgProps;

export function IconProvider<T extends SvgProps>(Icon: ComponentType<T>, displayName?: string){
  const WrappedIcon: FC<IconProps> = ({
   size,
   color = 'inherit',
   ...otherProps
 }) => {
    const props: SvgProps = {
      color
    }

    if (size) {
      props.width = size;
      props.height = size;
    }

    return <Icon {...props} {...otherProps as T}/>
  }

  WrappedIcon.displayName = displayName || Icon.displayName
  return WrappedIcon
}
