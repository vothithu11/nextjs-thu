import { social } from '@/data/data';
import SocialItem from '@/components/SocialItem';

const Social = () => {
  return (
    <div className='grid grid-cols-3 justify-items-center'>
    {social.map((value)=>(
      <div className='max-lg:mx-2 '>
      <SocialItem key={value.id} image={value.image} title={value.title}/>
      </div>
    ))}
  </div>
  )
}

export default Social