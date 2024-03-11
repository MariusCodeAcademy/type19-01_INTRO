export const BlogHero = () => {
  return (
    <div className='container grid items-center justify-center sm:block'>
      <div className="bg-no-repeat bg-cover bg-[url('/img/blog-page/mobile-blog-hero.png')] h-[308px] w-[311px] flex-col flex justify-center gap-4 sm:w-full object-fill sm:bg-[url('/img/blog-page/desktop-blog-hero.png')] md:h-[392px] md:gap-6">
        <div className='flex items-center justify-center gap-3'>
          <p className='605F5F'>
            <span>Home </span>
            <span className="bg-[url('/img/blog-page/blog-arrow.png')] inline-block w-2 bg-center h-[10px] bg-contain bg-no-repeat mr-2"></span>
            <span>Blog</span>
          </p>
        </div>
        <h1 className='text-[40px] leading-[44px] font-medium text-center md:text-[54px]'>
          Our blog
        </h1>
        <p className='leading-8 text-center md:text-xl'>
          Home ideas and design inspiration
        </p>
      </div>
    </div>
  );
};
