import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';

const Column = (props) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {description}
            {' '}
            {!!link.length && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default () => (
  <GuestLayout>
    <section className="hero is-medium is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Welcome to my site.
          </h1>
          <h2 className="subtitle">
            There are no limits for creativity
          </h2>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <Column
          title="Image Optimization"
          description="@pawjs/image-optimizer specially for image optimizations.
          Improving the compression of image with image-webpack-loader"
          link="https://www.reactpwa.com/docs/en/plugin-image-optimization.html"
        />
      </div>
      <div className="columns">
        <Column
          title="Skeleton loaders"
          description="All the goodness of skeleton loading with very simple route configuration.
          Supports pre-loading of data for the route as well."
          link=""
        />
      </div>
      <div className="columns">
        <Column
          title="Zero Configuration"
          description="You can also start minimal with react-pwa. You just need one file: `src/routes.js` and nothing more."
          link=""
        />
      </div>
    </section>
  </GuestLayout>
);
