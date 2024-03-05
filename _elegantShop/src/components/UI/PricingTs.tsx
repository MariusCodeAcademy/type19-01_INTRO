export default function PricingTs({ price, soldPrice }: { price: number; soldPrice?: number }) {
  return (
    <>
      {soldPrice ? (
        <div className='flex gap-3'>
          <p className='text-sm font-semibold'>${soldPrice.toFixed(2)}</p>
          <p className='text-sm text-gray-600	line-through'>${price.toFixed(2)}</p>
        </div>
      ) : (
        <div>
          <p className='text-sm font-semibold'>${price.toFixed(2)}</p>
        </div>
      )}
    </>
  );
}
