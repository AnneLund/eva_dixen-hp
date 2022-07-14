import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/shop.module.scss'
import {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link'

const BookItem = () => {
    const router = useRouter();
    const { status } = router.query;
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({
        name: 'Som et espeløv',
        description: 'Af Eva Dixen',
        image:
          'https://i.ibb.co/Yt1ywhM/sometespel-v.jpg',
        quantity: 0,
        price: 170,
      });

      const changeQuantity = (value) => {
        // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
        setItem({ ...item, quantity: Math.max(0, value) });
      };
      
      const onQuantityPlus = () => {
        changeQuantity(item.quantity + 1);
      };
      
      const onQuantityMinus = () => {
        changeQuantity(item.quantity - 1);
      };

      const onInputChange = (e) => {
        changeQuantity(parseInt(e.target.value));
    };

    const createCheckOutSession = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-stripe-session', {
          item: item,
        });
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
        if (result.error) {
          alert(result.error.message);
        }
        setLoading(false);
      };

  return (
    <>
      <Head>
        <title>Stripe Checkout with Next.js</title>
        <meta name='description' content='Complete Step By Step Tutorial for integrating Stripe Checkout with Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
      {status && status === 'success' && (
  <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
    Payment Successful
  </div>
)}
{status && status === 'cancel' && (
  <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
    Payment Unsuccessful
  </div>
)}
  <figure>
  <Image 
src={item.image} 
width={130} 
height={220}
/>  
<figcaption>
    <h2 className='text-2xl'>{item.price} DKK</h2>
    <h3 className='text-xl'>Som et espeløv</h3>
    <p className='text-sm text-gray-600 mt-1'>Antal:</p>
    <div className='border rounded'>
      <button
       onClick={onQuantityMinus}>
        -
      </button>
      <input
        onChange={onInputChange}
        type='number'
        className='p-2'
        value={item.quantity}
      />
      <button
      onClick={onQuantityPlus}
        className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
      >
        +
      </button>
    </div>
    <p>Total: {item.quantity * item.price},-</p>
    {/* <button
        onClick={createCheckOutSession}
      disabled={item.quantity === 0}
      className='bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100'
    >
      {loading ? 'Viderestiller...' : 'Køb'}
    </button> */}
    <button>
   <Link 
    href={'https://buy.stripe.com/28o5leahv6v3aha4gh'}
    disabled={item.quantity === 0}
    >{loading ? 'Viderestiller...' : 'Køb'}
    </Link>
    </button>
    </figcaption>
  </figure>
</main>
   
    </>
  );
}
  export default BookItem;