import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GitHub } from 'react-feather';

import TimelineIcon from '../../svg/TimelineIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <TimelineIcon />
        </div>
        YourTimeline.app
      </div>
      <div className="hidden md:block">
        <a
          href="https://github.com/nonameolsson/timeline-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-sm" hre>
            <GitHub className="float-left mr-4" />
            Open on GitHub
          </Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
