/** Rose/violet neon marquee signage from redesign 2c (High Roller Marquee). */
export function NeonMarqueeSign() {
  const bulbs = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center px-4 pb-2 pt-8 sm:px-10 sm:pt-11">
      <div className="gg-marquee-frame relative flex flex-col items-center gap-3.5 px-10 py-8 sm:gap-3.5 sm:px-[70px] sm:py-[30px]">
        <div
          className="pointer-events-none absolute -top-2 left-6 right-6 flex justify-between sm:left-6 sm:right-6"
          aria-hidden
        >
          {bulbs.map((i) => (
            <span
              key={`top-${i}`}
              className={[
                'size-2 rounded-full bg-[#fb7185] shadow-[0_0_10px_#fb7185]',
                i % 2 === 0 ? 'animate-gg-bulb-a' : 'animate-gg-bulb-b',
              ].join(' ')}
            />
          ))}
        </div>

        <h1 className="gg-marquee-title text-center text-[clamp(2rem,6vw,3.6rem)] leading-none tracking-wide">
          GAMBLING GOBBIES
        </h1>
        <p className="gg-marquee-subtitle text-center font-mono text-[10px] uppercase tracking-[0.35em] sm:text-xs sm:tracking-[0.45em]">
          The house of questionable repute
        </p>

        <div
          className="pointer-events-none absolute -bottom-2 left-6 right-6 flex justify-between sm:left-6 sm:right-6"
          aria-hidden
        >
          {bulbs.map((i) => (
            <span
              key={`bottom-${i}`}
              className={[
                'size-2 rounded-full bg-[#a78bfa] shadow-[0_0_10px_#a78bfa]',
                i % 2 === 0 ? 'animate-gg-bulb-b' : 'animate-gg-bulb-a',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
