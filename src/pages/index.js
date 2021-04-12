import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import Placeholder from '../svg/Placeholder';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex justify-around">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Timeline</h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Create your own timeline with events, people and places. Visualize it. Share it. Enjoy
            it.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Coming soon</Button>
          </p>
          <p className="mt-4 text-gray-600">Please be patient</p>
        </div>
        <div className="lg:w-1/2 max-w-xs place-items-center">
          <Placeholder />
        </div>
      </div>
    </section>
  </Layout>
);
