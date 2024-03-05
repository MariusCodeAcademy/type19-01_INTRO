//

import OneCardBestSeller from './OneCardBestSeller';

export default function BestSellerList() {
  return (
    <div className='mb-5 grid grid-cols-2 w-96 ml-auto mr-auto mt-5'>
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} soldPrice={180.25} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} />
    </div>
  );
}
