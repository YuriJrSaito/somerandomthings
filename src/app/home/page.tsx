'use client'
import "./home.scss";
import Widget1 from "@/components/widget/widget1";
import Table from "@/components/table";
import { PagiableTable } from "@/components/table";
import { userRows, userHeader } from "@/datasource/userData";

const Home = () => {

  const UserData: PagiableTable = {
    title: "Users",
    limit: 3,
    total: userRows.length,
    initialCurrentPage: 1,
    initialStart: 0,
    header: userHeader,
    contentData: userRows,
    cellDatas: [['data.id', 'text'], ['data.username', 'text'], ['data.img', 'img'], ['data.email', 'text'], 
    ['data.status', 'text'], ['data.age', 'text']],
  }

  return (
    <>
      <Table InitialTable={UserData} />
    </>
  );
};

export default Home;