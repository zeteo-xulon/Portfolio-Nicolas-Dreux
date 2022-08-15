import portrait from '../images/profil_picND.png';
import Stack from './Stack';

export default function Home(){
  return(
    <main className="home">
      <img src={portrait} className="portrait" alt="user" />
      <Stack></Stack>
      <p className='presentation__text'>The website is under construction</p>
    </main> 
  )
}
