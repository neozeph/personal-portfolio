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
      <span
  className={`relative overflow-hidden flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground ring-1 ring-inset ring-light-blue/30 group-hover:bg-primary/80 transition-colors ${sizeClasses[size]}`}
>
  {/* Shine Effect */}
  <span
    className="
      absolute
      top-0
      left-[-150%]
      w-[80%]
      h-full
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      skew-x-[-20deg]
      group-hover:left-[150%]
      transition-all
      duration-1000
      ease-out
      pointer-events-none
    "
  />

<span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
    {children}
  </span>
</span>
    </button>
  );
};
