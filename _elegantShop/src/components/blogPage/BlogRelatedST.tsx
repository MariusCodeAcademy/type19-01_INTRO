import { Link } from 'react-router-dom';
import BlogListST from './BlogListST';

export default function BlogRelatedST() {
  return (
    <div className='mx-auto container mt-10 mb-10'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-medium'>You might also like</h2>
        <p className='hidden sm:inline'>
          <Link to={'#'}>More Articles {'->'}</Link>
        </p>
      </div>
      <BlogListST />
      <p className='sm:hidden'>
        <Link to={'#'}>More Articles {'->'}</Link>
      </p>
    </div>
  );
}
