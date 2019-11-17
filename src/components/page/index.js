import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Page = ({ title, children }) => {
  return (
    <main>
      <Helmet>
        <title>{`${title} | VFCrypto`}</title>
      </Helmet>

      {children}
    </main>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
