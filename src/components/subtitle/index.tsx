import clsx from 'clsx';

interface IFormSubTitleProps {
  text: string;
  className?: string;
  uppercase?: boolean;
}

//TODO change the name and exports ...

export const FormSubTitle = ({ text, uppercase, className }: IFormSubTitleProps) => {
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
