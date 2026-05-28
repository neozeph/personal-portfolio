export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/25 bg-gradient-to-r from-primary via-light-blue to-blue p-[2px] group transition-transform active:scale-95";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className={`relative flex items-center justify-center gap-2 rounded-full bg-blue text-primary-foreground ring-1 ring-inset ring-light-blue/30 group-hover:bg-blue/80 transition-colors w-full h-full ${sizeClasses[size]}`}>
        {children}
      </span>
    </button>
  );
};
