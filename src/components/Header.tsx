import React from "react";

const Header = (): JSX.Element => {
  return (
    <header
      role="banner"
      className="bg-header body-font shadow-xl shadow-header"
    >
      <div className="flex flex-wrap p-5 flex-col items-center justify-center">
        <h1
          className="flex title-font font-medium items-center text-page"
          aria-label="CRUX Lab"
        >
          <span className="ml-3 text-4xl text-main-text leading-tight font-serif">
            CRUX Lab
          </span>
        </h1>
      </div>
    </header>
  );
};

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader;
