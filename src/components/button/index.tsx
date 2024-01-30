import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface IButtonProps {
  route?: string;
  textContent: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ textContent, route, type, disabled, className }: IButtonProps) => {
  // const [verification, setVerification] = useState(disabled);
  // const handleClick = (boolean: boolean) => {
  //   if (disabled === true) return;
  //   console.log(1);
  // };

  return (
    <>
      {route && (
        <Link
          to={route}
          className={clsx(
            "w-full min-h-[50px] group bg-transparent text-center flex items-center relative before:border-2 before:border-[#A78963] before:w-[100%] before:h-[70%] before:content-[''] before:block before:absolute before:top-[15%] before:bg-transparent",
            className
          )}
        >
          <div className="w-full h-full absolute before:border-2 before:border-[#A78963] before:w-[calc(100%-16px)] before:h-[100%] before:content-[''] before:block before:absolute before:left-[3%] before:bg-transparent"></div>
          <div className='absolute rounded w-full bg-[#A78963] insert-auto h-0 group-hover:h-full transition-all ease-in-out duration-500 '></div>
          <span className='w-full select-none relative z-50 text-black group-hover:text-white delay-[200ms]'>
            {textContent}
          </span>
        </Link>
      )}
      {type && (
        <button
          type={type}
          // disabled={verification}
          // onClick={() => handleClick(!verification)}
          className={clsx(
            "w-full min-h-[50px] group bg-transparent text-center flex items-center relative before:border-2 before:border-[#A78963] before:w-[100%] before:h-[70%] before:content-[''] before:block before:absolute before:top-[15%] before:bg-transparent",
            className
          )}
        >
          <div className="w-full h-full absolute before:border-2 before:border-[#A78963] before:w-[calc(100%-16px)] before:h-[100%] before:content-[''] before:block before:absolute before:left-[8px] before:bg-transparent"></div>
          <div className='absolute rounded w-full bg-[#A78963] insert-auto h-0 group-hover:h-full transition-all ease-in-out duration-300 '></div>
          <span className=' px-2 w-full select-none relative z-50 text-grey-600 group-hover:text-white delay-[220ms] line-clamp-1 text-ellipsis text-'>
            {textContent}
          </span>
        </button>
      )}
    </>
  );
};
