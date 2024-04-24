import ThemeToggle from '../ThemeToggleButton';

export default function Header() {
  return (
    <header className='bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md'>
      <section className='mx-auto flex items-center justify-between p-6 py-2 sm:p-2'>
        <div className='ml-auto'>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
