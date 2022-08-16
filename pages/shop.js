import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/shop.module.scss'
import {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link'

const Shop = () => {

    /////////////////////BOG//////////////////////////
    const router = useRouter();
    const { status } = router.query;
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);
    const [loading, setLoading] = useState(false);
    const [test, setTest] = useState({
        name: 'Test-product',
        description: 'Af Eva Dixen',
        image:
          'https://i.ibb.co/4pvKPZJ/logochi.png',
        quantity: 0,
        price: 2.50,
      });

      const changeQuantity = (value) => {
        // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
        setTest({ ...test, quantity: Math.max(0, value) });
      };
      
      const onQuantityPlus = () => {
        changeQuantity(test.quantity + 1);
      };
      
      const onQuantityMinus = () => {
        changeQuantity(test.quantity - 1);
      };

      const onInputChange = (e) => {
        changeQuantity(parseInt(e.target.value));
    };

    const createCheckOutSession = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-stripe-session', {
          test: test,
        });
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
        if (result.error) {
          alert(result.error.message);
        }
        setLoading(false);
      };

    ////////////////////////TEST//////////////////////

    return(

<section>
<h1>Velkommen til webshoppen</h1>
    <article className={styles.shop}>
        
    <figure>
  <Image 
src={test.image} 
width={130} 
height={220}
/>  
<figcaption>
    <h2 className='text-2xl'>{test.price} DKK</h2>
    <h3 className='text-xl'>Test-produkt</h3>
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
        value={test.quantity}
      />
      <button
      onClick={onQuantityPlus}
        className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
      >
        +
      </button>
    </div>
    <p>Total: {test.quantity * test.price},-</p>

    {/* <button
    onClick={createCheckOutSession}
      disabled={test.quantity === 0}
      className='bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100'
    >
      {loading ? 'Viderestiller...' : 'Køb'}
    </button> */}
  
   <Link 
    href={'https://buy.stripe.com/4gwdRK9drg5D892eUW'}
    disabled={test.quantity === 0}
    >{loading ? 'Viderestiller...' : 'Køb'}
    </Link>
  
    </figcaption>
  </figure>
     </article>
</section>
    )
}


export default Shop;