export const Banner = ({ src }: { src: string }) => {
  console.log(src);
  return (
    <div className={`w-full aspect-[2.42] bg-cover`} style={{ backgroundImage: `url(${src})` }}>
      Banner
    </div>
  );
};
