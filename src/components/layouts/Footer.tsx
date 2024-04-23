export default function Footer() {
  return (
    <footer className='mx-auto p-6 sm:p-4'>
      <div className='flex'>
        <p className='text-xs'>
          {new Date().getFullYear()} -{' '}
          <a href='https://github.com/cagriakar' target='_blank' rel='noopener noreferrer'>
            Cagri Akar
          </a>
        </p>
      </div>
    </footer>
  );
}
