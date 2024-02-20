interface ISpinnerProps {
  width: number;
}

export const Spinner: React.FC<ISpinnerProps> = ({ width }) => {
  return (
    <div className='relative' style={{ width: width, height: width }}>
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-top-left animate-rotateBigSpinner w-full h-full rounded-full border-b-transparent border-thirdBg'
        style={{ borderWidth: width * 0.13 }}
      />
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] origin-top-left animate-rotateSmallSpinner rotate-90 rounded-full border-4 border-b-transparent border-mainTextHover'
        style={{ borderWidth: width * 0.13 }}
      />
    </div>
  );
};
