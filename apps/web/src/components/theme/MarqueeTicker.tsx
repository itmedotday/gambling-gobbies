const TICKER =
  'GRUBNASH cashed out 4.20x on CRASH +512 GG  ✦  SNIKT rolled a NAT 20 +990 GG  ✦  MOULDY BEA cleared 12 chests on MINES +1,384 GG  ✦  KRETCH lost it all. again.  ✦  ';

/** Scrolling win ticker from redesign 2c. */
export function MarqueeTicker() {
  return (
    <div
      className="gg-marquee-ticker h-[var(--gg-ticker-height)] overflow-hidden border-y border-[var(--gg-marquee-ticker-border)] bg-[var(--gg-marquee-ticker-bg)]"
      aria-hidden
    >
      <div className="gg-marquee-ticker-track flex w-max animate-gg-ticker gap-0">
        <span className="whitespace-nowrap px-10 py-2.5 font-mono text-xs tracking-wide text-[#fb7185] [text-shadow:0_0_8px_rgba(244,63,94,.7)]">
          {TICKER}
        </span>
        <span className="whitespace-nowrap py-2.5 font-mono text-xs tracking-wide text-[#fb7185] [text-shadow:0_0_8px_rgba(244,63,94,.7)]">
          {TICKER}
        </span>
      </div>
    </div>
  );
}
