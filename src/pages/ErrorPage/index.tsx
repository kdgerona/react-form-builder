import { useRouteError } from 'react-router-dom';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const error = useRouteError() as any;

  return (
    <div className='w-full h-screen'>
      <div className='h-full flex flex-col items-center justify-center text-center'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>

        <div className='my-4'>
          <p className='text-black-500'>
            {error?.statusText || error?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
