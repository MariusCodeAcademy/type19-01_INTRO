import OneBlogCard from './OneBlogCard';
import { blogItemsArr } from './blogItemsArr';

export default function BlogListST() {
  return (
    <div className='mb-2 grid sm:grid-cols-3 mt-1 gap-2 py-10'>
      {blogItemsArr.map((iObj) => (
        <OneBlogCard key={iObj.id} title={iObj.name} date={iObj.date} img={iObj.image} />
      ))}
    </div>
  );
}
