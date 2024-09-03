import {ComponentProps, ReactNode}  from 'react';
import Sidebar from './Sidebar.tsx';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

import SearchModal from "./SearchModal.tsx";
interface HtmlProps extends ComponentProps<'html'> {
  children: ReactNode
}

export function Html({ children}: HtmlProps) {
  return (
    <>
    <div className="flex grow">
    <Sidebar />
    <div className="wrapper flex grow flex-col">
      <Header />
      <main className="grow content pt-5" id="content" role="main">

      <div className="container-fixed">
      {children}
      </div>
      </main>
      <Footer />
    </div>
  </div>
  <SearchModal />
  </>

  )
}