'use client'
import "./home.scss";
import Widget1 from "@/components/widget/widget1";
import Pagination from "@/components/widget/pagination";
import { useState } from 'react';

const Home = () => {

  const [currentPage, setCurrentPage] = useState<number>(5);

  const validCurrentPage = (page: number) => {
    if (page >= 1)
      setCurrentPage(page)
  }

  return (
    <>
      <Pagination currentPage={currentPage} total={200} limit={10} onPageChange={(page: number) => validCurrentPage(page)} />
    </>
  );
};

export default Home;