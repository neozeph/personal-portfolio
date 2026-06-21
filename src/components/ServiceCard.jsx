import { useState } from "react";

export const ServiceCard = ({
  image,
  icon: Icon,
  title,
  description,
  tech,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="
        relative
        w-[140px] h-[220px]
sm:w-[170px] sm:h-[280px]
xl:w-[220px] xl:h-[340px]
        cursor-pointer
        perspective-[1200px]
        transition-all
        duration-300
        hover:-translate-y-3
        hover:scale-105
active:scale-95
      "
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`
          relative
          w-full
          h-full
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
glass
rounded-2xl
border
border-primary/20
overflow-hidden
[backface-visibility:hidden]
"
        >
          {/* Criss Cross Texture */}

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
      repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 28px,
        rgba(255,255,255,.025) 28px,
        rgba(255,255,255,.025) 29px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent 28px,
        rgba(255,255,255,.025) 28px,
        rgba(255,255,255,.025) 29px
      )
    `,
            }}
          />

          {/* Decorative Corners */}

          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-primary/20" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-primary/20" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-primary/20" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/20" />

          {/* Center Diamond */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                w-24
                h-24
                rotate-45
                border
                border-primary/30
                bg-primary/10
                backdrop-blur-sm
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              <Icon
                className="
                  w-10
                  h-10
                  -rotate-45
                  text-primary
                "
              />
            </div>
          </div>
        </div>

        {/* BACK */}

        <div
          className="
absolute
inset-0
glass
rounded-2xl
border
border-primary/20
overflow-hidden
[backface-visibility:hidden]
[transform:rotateY(180deg)]
flex
flex-col
"
        >
          {/* Image */}

          <div className="relative h-20 sm:h-24 lg:h-32 overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="
      w-full
      h-full
      object-cover
      brightness-70
      contrast-110
    "
            />

            <div
              className="
      absolute
      inset-0
      bg-gradient-to-t
      from-secondary/90
      via-primary/20
      to-transparent
      pointer-events-none
    "
            />
          </div>

          {/* Content */}

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-2">
              {title}
            </h3>

            <p
              className="
    hidden
    lg:block
    text-xs
    leading-relaxed
    text-muted-foreground
    mb-4
  "
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tech.map((item) => (
                <span
                  key={item}
                  className="
                    px-1.5 py-0.5
                    sm:px-2 sm:py-1
                    rounded-full
                    bg-primary/10
                    border
                    border-primary/20
                    text-[9px] sm:text-[10px] lg:text-xs
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
