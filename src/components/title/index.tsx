import clsx from 'clsx';

interface IFormTitleProps {
  text?: string;
  className?: string;
  uppercase?: boolean;
}

export const Title = ({ text, uppercase, className }: IFormTitleProps) => {
  return (
    <h3
      className={clsx(
        'text-secondText w-full select-none ',
        {
          uppercase: uppercase,
          capitalize: !uppercase,
        },
        className
      )}
    >
      {text}
    </h3>
  );
};
