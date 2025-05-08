import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="py-6 px-6 text-center">
      <p className="mb-0 fs-4">
        Design and Developed by{" "}
        <a
          href="https://alaoscorty.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pe-1 text-primary text-decoration-underline"
        >
          AlaoDeveloppement
        </a>{" "}
        Distributed by <a href="https://github.com/alaoscorty">github/alaoscorty</a>
      </p>
    </div>
  );
};

export default Footer;
