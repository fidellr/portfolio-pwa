import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Fidel
          &rsquo;s Portfolio
        </h1>
        <h2 className="subtitle">
          Hi, My name is Fidel Ramadhan, you can call me Fidel or "del" :).
        </h2>
        <Link to="/home" className="button">Checkout my page..</Link>
      </div>
    </div>
  </section>
);
