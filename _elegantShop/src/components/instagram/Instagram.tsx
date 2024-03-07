export default function Instagram() {
  return (
    <div className='px-10 py-8 '>
      <div className='text-center w-[310px] ml-auto mr-auto'>
        <p className='text-base text-[#6C7275] pb-3'>NEWSFEED</p>
        <h3 className='text-4xl pb-5'>Instagram</h3>
        <p className='text-sm pb-3'>follow us on social media for more discount & promotions</p>
        <h4 className='text-[#6C7275] text-xl pb-12'>
          <a href='#'>@3legant_Official</a>
        </h4>
      </div>
      <div className='w-[310px] ml-auto mr-auto flex flex-col gap-5 md:w-full md:grid md:grid-cols-2 lg:grid-cols-4 '>
        <img className='w-full' src='/img/pirmas.jpg' alt='@3legant_Official' />
        <img className='w-full' src='/img/antras.jpg' alt='@3legant_Official' />
        <img className='w-full' src='/img/trecias.jpg' alt='@3legant_Official' />
        <img className='w-full' src='/img/ketvirtas.jpg' alt='@3legant_Official' />
      </div>
    </div>
  );
}
