import search from '@/assets/search.svg';

export default function SearchMe() {
  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center'>
      <img width={400} src={search} alt='Try search something' />
      <div className='text-center'>
        <h1 className='text-xl'>Try search ticker by name</h1>
      </div>
    </div>
  );
}
