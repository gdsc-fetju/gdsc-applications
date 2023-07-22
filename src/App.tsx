import Footer from './Components/Footer';
import { TypeForm } from './Components/TypeForm';
import gdscLogo from './assets/gdscfetlogo.png';

export default function App() {
  return (
    <main className='flex flex-col items-center justify-between h-screen py-10'>
      <h1 className='text-center text-3xl md:text-5xl font-bold text-[#de5246]'>
        Core Team Application Form
      </h1>
      {/* Card Section */}
      <div className='flex flex-col items-center p-5 px-10 pb-10 m-5 mt-10 border-2 border-blue-300 rounded-xl'>
        <img src={gdscLogo} draggable='false' className='py-10 w-96' />
        <TypeForm />
      </div>
      <Footer />
    </main>
  );
}
