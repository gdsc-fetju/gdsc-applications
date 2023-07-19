import { TypeForm } from './Components/TypeForm';
import gdscLogo from './assets/gdscfetlogo.png';

export default function App() {
  return (
    <main className='py-10 flex flex-col items-center'>
      <h1 className='text-center text-3xl md:text-5xl font-bold text-[#de5246]'>
        Core Team Application Form
      </h1>
      <img src={gdscLogo} draggable='false' className='w-96 py-10' />
      <TypeForm />
    </main>
  );
}
