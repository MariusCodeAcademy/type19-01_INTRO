import Card from '../../UI/Card';

export default function NewArivals() {
  return (
    <div>
      <h1>
        New Arrivals <span>.</span>
        <span>.</span>
        <span>.</span>
      </h1>
      <div className='flex overflow-hidden gap-2'>
        <Card img={'/public/HomePageImages/6.png'} />
        <Card img={'/public/HomePageImages/5.png'} />
        <Card img={'/public/HomePageImages/4.png'} />
        <Card img={'/public/HomePageImages/3.png'} />
        <Card img={'/public/HomePageImages/2.png'} />
        <Card img={'/public/HomePageImages/1.png'} />
      </div>
    </div>
  );
}
