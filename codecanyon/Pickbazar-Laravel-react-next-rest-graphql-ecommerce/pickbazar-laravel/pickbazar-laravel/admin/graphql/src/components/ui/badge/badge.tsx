import cn from "classnames";
import { useTranslation } from "next-i18next";

type BadgeProps = {
  className?: string;
  color?: string;
  textColor?: string;
  text?: string;
  textKey?: string;
  animate?: boolean;
};

const Badge: React.FC<BadgeProps> = (props) => {
  const { t } = useTranslation();
  const {
    className,
    color: colorOverride,
    textColor: textColorOverride,
    text,
    textKey,
    animate = false,
  } = props;

  const classes = {
    root: "px-3 py-1 rounded-full text-xs whitespace-nowrap relative",
    animate: "animate-pulse",
    default: "bg-accent",
    text: "text-light",
  };

  return (
    <span
      className={cn(
        classes.root,
        {
          [classes.default]: !colorOverride,
          [classes.text]: !textColorOverride,
          [classes.animate]: animate,
        },
        colorOverride,
        textColorOverride,
        className
      )}
    >
      {textKey ? t(textKey) : text}
    </span>
  );
};

export default Badge;
