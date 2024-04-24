import empty from '@/assets/empty.svg';

export default function Empty() {
  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center'>
      <img width={400} src={empty} alt='404' />
      <div className='text-center'>
        <h1 className='text-3xl'>No results found</h1>
        <p>Please try another search</p>
      </div>
    </div>
  );
}
