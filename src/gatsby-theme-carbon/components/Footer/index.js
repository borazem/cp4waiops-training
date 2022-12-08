import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
    Built with ❤️ by Niklaus Hirt/IBM in 2022
    </p>
  </>
);

const links = {
  firstCol: [
  ],
  secondCol: [
  
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
