import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#332D2D] py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="mx-2">
            <a className="text-xl text-neutral-100" href="/">
              Welcome
            </a>
          </div>

          <button
            className="block border-0 bg-transparent px-2 text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent10"
            aria-controls="navbarSupportedContent10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent10"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
              >
                <a
                  className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 active:text-black/80 motion-reduce:transition-none lg:px-2"
                  aria-current="page"
                  href="/"
                  data-twe-nav-link-ref
                >
                  Home
                </a>
              </li>

              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 active:text-black/80 motion-reduce:transition-none lg:px-2"
                  href="/"
                  data-twe-nav-link-ref
                >
                  Add New Product
                </a>
              </li>

              {/* <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 active:text-black/80 motion-reduce:transition-none lg:px-2"
                  href="/"
                  data-twe-nav-link-ref
                >
                  Pricing
                </a>
              </li>

              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 active:text-black/80 motion-reduce:transition-none lg:px-2"
                  href="/"
                  data-twe-nav-link-ref
                >
                  About
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
