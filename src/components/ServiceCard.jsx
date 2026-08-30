import { useState } from "react";

export const ServiceCard = ({
  image,
  icon: Icon,
  title,
  description,
  tech,
}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleCard = () => {
    setFlipped((current) => !current);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${flipped ? "Hide" : "Show"} details for ${title}`}
      aria-pressed={flipped}
      onClick={toggleCard}
      onKeyDown={handleKeyDown}
      className="
        group
        relative
        w-full
        aspect-[11/17]
        cursor-pointer
        perspective-[1200px]
        transition-transform
        duration-300
        hover:-translate-y-2
        hover:scale-[1.02]
        active:scale-[0.98]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-4
        focus-visible:ring-offset-background
      "
    >
      <div
        className={`
          relative
          h-full
          w-full
          duration-700
          [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* FRONT */}
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-xl
            border
            border-primary/25
            glass
            [backface-visibility:hidden]
            sm:rounded-2xl
          "
        >
          {/* Crosshatch texture */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent 0px,
                  transparent 24px,
                  rgba(255,255,255,0.025) 24px,
                  rgba(255,255,255,0.025) 25px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent 0px,
                  transparent 24px,
                  rgba(255,255,255,0.025) 24px,
                  rgba(255,255,255,0.025) 25px
                )
              `,
            }}
          />

          {/* Inner border */}
          <div className="absolute inset-2 rounded-lg border border-white/5 sm:inset-3 sm:rounded-xl" />

          {/* Decorative corners */}
          <div className="absolute left-3 top-3 size-5 border-l border-t border-primary/30 sm:left-4 sm:top-4 sm:size-7" />

          <div className="absolute right-3 top-3 size-5 border-r border-t border-primary/30 sm:right-4 sm:top-4 sm:size-7" />

          <div className="absolute bottom-3 left-3 size-5 border-b border-l border-primary/30 sm:bottom-4 sm:left-4 sm:size-7" />

          <div className="absolute bottom-3 right-3 size-5 border-b border-r border-primary/30 sm:bottom-4 sm:right-4 sm:size-7" />

          {/* Center diamond */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                flex
                aspect-square
                w-[42%]
                rotate-45
                items-center
                justify-center
                border
                border-primary/35
                bg-primary/10
                shadow-[0_0_30px_rgba(255,255,255,0.04)]
                backdrop-blur-sm
                transition-all
                duration-300
                group-hover:border-primary/60
                group-hover:bg-primary/15
              "
            >
              <Icon
                className="
                  h-[40%]
                  w-[40%]
                  -rotate-45
                  text-primary
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </div>
          </div>

          {/* Flip hint */}
          <span
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground/70
              sm:text-[9px]
            "
          >
            View service
          </span>
        </div>

        {/* BACK */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-primary/30
            bg-background/95
            shadow-xl
            backdrop-blur-xl
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
            sm:rounded-2xl
          "
        >
          {/* Image area */}
          <div className="relative h-[35%] min-h-0 shrink-0 overflow-hidden">
            <img
              src={image}
              alt=""
              className="
                h-full
                w-full
                object-cover
                brightness-[0.65]
                contrast-110
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-background
                via-background/35
                to-transparent
              "
            />

            {/* Icon badge */}
            <div
              className="
                absolute
                bottom-2
                left-3
                flex
                size-7
                items-center
                justify-center
                rounded-md
                border
                border-primary/30
                bg-background/80
                text-primary
                backdrop-blur-md
                sm:size-8
              "
            >
              <Icon className="size-3.5 sm:size-4" />
            </div>
          </div>

          {/* Content */}
          <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4 xl:p-3 2xl:p-4">
            <h3
              className="
                text-[11px]
                font-semibold
                leading-tight
                text-foreground
                sm:text-sm
                xl:text-xs
                2xl:text-sm
              "
            >
              {title}
            </h3>

            <div className="my-2 h-px w-8 bg-primary/40" />

            <p
              className="
    text-[9px]
    leading-relaxed
    text-muted-foreground
    sm:text-[10px]
    md:text-[11px]
    xl:text-[10px]
    2xl:text-xs
  "
            >
              {description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1 sm:gap-1.5">
              {tech.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-primary/20
                    bg-primary/10
                    px-1.5
                    py-0.5
                    text-[7px]
                    leading-tight
                    text-primary
                    sm:text-[9px]
                    2xl:px-2
                    2xl:text-[10px]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-0.5 w-full bg-primary/60" />
        </div>
      </div>
    </div>
  );
};
