import React from "react";
import {useGlobalContext} from "./context";


const Hero =() => {
    const {closeSubmenu} = useGlobalContext();
    
return (
    <section className='hero' >
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>
          Payments infrastructure <br />
          for the internet
        </h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripes software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={"#"} className='phone-img' alt='phone' />
      </article>
    </div>
  </section>
)
}

export default Hero