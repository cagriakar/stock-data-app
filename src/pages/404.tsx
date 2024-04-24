import notFound from '@/assets/404.svg';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div className='grid gap-4 md:flex md:min-h-[60vh] md:items-center md:justify-center'>
      <div className='flex flex-col items-center'>
        <img width={400} src={notFound} alt='404' />
        <a href='https://stories.freepik.com/web' className='text-xs'>
          Illustration by Freepik Stories
        </a>
      </div>

      <div className='text-center md:text-start'>
        <h1 className='text-3xl'>Page not Found</h1>
        <div className='grid gap-2'>
          <p>{`It's Okay!`}</p>
          <div>
            <Link to='/'>{`Let's Head Back`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
