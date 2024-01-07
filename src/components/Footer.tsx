import React from "react";

// render app footer content
const Footer = (): JSX.Element => {
  return (
    <footer aria-labelledby="footer" className="body-font bg-header">
      <div className="px-5 py-3 flex items-center sm:flex-row flex-col">
        <h3 className="flex title-font font-medium items-center md:justify-start justify-center text-page">
          <span className="ml-3 text-2xl text-page font-serif">CRUX Lab</span>
        </h3>
        <p className="text-sm text-page sm:ml-4 sm:pl-4 sm:border-l-2 sm:bg-header sm:py-2 sm:mt-0 mt-2">
          © 2024 Generate UX metrics report for any webpage —
          <a
            href="https://sjshank.me"
            className="text-blue-600 ml-1"
            target="_blank"
            role="link"
            aria-labelledby="sjshank"
          >
            @sjshank
          </a>
        </p>
      </div>
    </footer>
  );
};
const MemoizedFooter = React.memo(Footer);

export default MemoizedFooter;
