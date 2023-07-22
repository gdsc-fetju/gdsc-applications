import Footer from './Components/Footer';
import { TypeForm } from './Components/TypeForm';
import gdscLogo from './assets/gdscfetlogo.png';

export default function App() {
  return (
    <main className='flex flex-col items-center py-10'>
      <h1 className='text-center text-3xl md:text-5xl font-bold text-[#de5246]'>
        Core Team Application Form
      </h1>
      <img src={gdscLogo} draggable='false' className='py-10 w-96' />
      <TypeForm />
      <Footer />
    </main>
  );
}
