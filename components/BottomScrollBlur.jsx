export function BottomScrollBlur() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-14 sm:h-16">
      <div className="absolute inset-0 backdrop-blur-[0.5px] [mask-image:linear-gradient(to_top,black_0%,transparent_25%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_top,black_0%,transparent_45%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_0%,transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_0%,transparent_75%)]" />
      <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]" />
    </div>
  );
}
