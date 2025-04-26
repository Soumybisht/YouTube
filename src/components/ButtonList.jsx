import Buttons from './Buttons';

const ButtonList = () => {
  const listNames = ["All","Gaming","Music","Sports","Football","Anime","News","Computers","PS5","WWE","Cricket","DSA"]
  return (
    <div className='flex mx-4'>
      {listNames.map((name,index)=>{
        return (
            <Buttons key={index} name={name} />
        )
      })}
    </div>
  )
}

export default ButtonList;
