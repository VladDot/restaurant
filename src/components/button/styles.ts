import clsx from 'clsx';

export const getStyles = (disabled: boolean, className?: string) => ({
  btn: clsx(
    "w-full min-h-[50px] group bg-transparent text-center flex items-center relative before:border-2 enabled:before:border-secondTextHover disabled:before:border-disabled before:w-[100%] before:h-[70%] before:content-[''] before:block before:absolute before:top-[15%] before:bg-transparent",
    className
  ),
  squareFrame: clsx(
    "w-full h-full absolute before:border-2 before:w-[calc(100%-16px)] before:h-[100%] before:content-[''] before:block before:absolute before:left-[8px] before:bg-transparent",
    {
      'before:border-secondTextHover': !disabled,
      'before:border-disabled': disabled,
    }
  ),
  rectangularFrame: clsx(
    'absolute rounded w-full bg-secondText insert-auto h-0 transition-all ease-in-out duration-300',
    {
      'group-hover:h-full ': !disabled,
    }
  ),
  span: clsx(
    'flex gap-1 justify-center px-4 w-full select-none relative z-50 delay-[220ms] line-clamp-1 text-ellipsis',
    {
      'group-hover:text-white text-bgA78963': !disabled,
      'text-disabled': disabled,
    }
  ),

  link: clsx(
    "w-full min-h-[50px] group bg-transparent text-center flex items-center relative before:border-2 before:border-bgA78963 before:w-[100%] before:h-[70%] before:content-[''] before:block before:absolute before:top-[15%] before:bg-transparent",
    className
  ),
});
