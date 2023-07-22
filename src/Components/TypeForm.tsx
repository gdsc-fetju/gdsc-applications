import { PopupButton } from '@typeform/embed-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function TypeForm() {
  const [submitted, setSubmitted] = useLocalStorage('submitted', false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className='flex flex-col items-center flex-grow'>
        <h1 className='text-center text-3xl md:text-5xl font-light text-[#de5246]'>
          Your response has been recorded
        </h1>
      </div>
    );
  }

  return (
    <PopupButton
      onSubmit={handleSubmit}
      id='jovDAo3R'
      style={{ fontSize: 20 }}
      className='middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
      data-ripple-light='true'
    >
      Apply Here
    </PopupButton>
  );
}
