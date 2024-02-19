import clsx from 'clsx';

interface IFormSubTitleProps {
  text: string;
  className?: string;
  uppercase?: boolean;
}

export const FormSubTitle = ({ text, uppercase, className }: IFormSubTitleProps) => {
  console.log(text[0].toUpperCase() + text.slice(1));
  return (
    <h2
      className={clsx(
        'text-secondText w-full text-center select-none',
        {
          uppercase: uppercase,
          capitalize: !uppercase,
        },
        className
      )}
    >
      {text}
    </h2>
  );
};
