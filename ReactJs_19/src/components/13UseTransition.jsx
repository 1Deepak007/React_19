
import React, { useState, useTransition } from 'react';


const UseTransition = () => {
  const [pending, setPending] = useState(false);
  const [isPending, startTransition] = useTransition(); // useTransition hook

  const handleClick = async () => {
    // Disable the button by setting pending to true
    setPending(true);

    // Simulate an async process with Promise and setTimeout
    startTransition(() => {
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('Process completed!');
          resolve();
        }, 2000); // simulate a 2-second process
      }).then(() => {
        setPending(false); // Re-enable the button after 2 seconds
      });
    });
  };

  //---------------------------------------------------------------
  
  const [completing, startCompleting] = useTransition();
  let [loading, setLoading] = useState(true);

  const handleButton=()=>{
    startCompleting(async()=>{
      await new Promise(res => setTimeout(res, 5000));
    })
  }

  return (
    <>
    <div className='m-4'>
      <h2 className="text-2xl text-center underline">Use Transition Hook Example</h2>
      <button
        onClick={handleClick}
        disabled={pending || isPending} // Disable button if it's pending
        className="bg-blue-300 p-2 text-green-800 mt-3 font-bold rounded-full"
      >
        {pending ? 'Processing...' : 'Click Me'}
      </button>
    </div>
    <div className='m-4 bg-green-300 p-5'>
      {
        completing ? 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSRFYYQuN6OLy85kZqv1grnEGC8KGNwEgwg&s" alt="loading" />
        :
        <p>Load image</p>
      }
      <button onClick={handleButton} disabled={completing} className='bg-blue-300 p-2 text-green-800 mt-3 font-bold rounded-full'>Click</button>
    </div>
    </>
  );
};

export default UseTransition;