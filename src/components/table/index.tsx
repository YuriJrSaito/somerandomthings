'use client'
import './table.scss';
import { useState } from 'react';
import Pagination from '../widget/pagination';
import Cell from './cell';

export type PagiableTable = {
    limit: number;
    total: number;
    initialCurrentPage: number;
    initialStart: number;
    header: Array<string>;
    contentData: Array<any>;
    cellDatas: Array<Array<string>>;
}

const Table = ({ InitialTable }: { InitialTable: PagiableTable }) => {
    const [currentPage, setCurrentPage] = useState<number>(InitialTable.initialCurrentPage);
    const [start, setStart] = useState<number>(InitialTable.initialStart);
    const [end, setEnd] = useState<number>(InitialTable.limit);

    const setValidPage = (page: number) => {

        if (page != currentPage) {
            page > currentPage ? (setStart(start + (page - currentPage) * InitialTable.limit), setEnd(end + (page - currentPage) * InitialTable.limit)) :
                (setStart(start - (currentPage - page) * InitialTable.limit), setEnd(end - (currentPage - page) * InitialTable.limit));

            setCurrentPage(page);
        }
    }

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        {
                            InitialTable.header &&
                            InitialTable.header.map((title: string, index: number) => (
                                <td key={index}>{title}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        InitialTable.contentData &&
                        InitialTable.contentData.slice(start, end).map((data, index:number) => {
                            return (
                                <tr key={index}>
                                    {
                                        InitialTable.cellDatas.map((call: Array<string>) => (
                                            <Cell key={index + call[0] + call[1]} data={eval(call[0])} componentType={call[1]} />
                                        ), data)
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className='pagination-component'>
                <Pagination currentPage={currentPage} total={InitialTable.total} limit={InitialTable.limit} onPageChange={(page: number) => setValidPage(page)} />
            </div>
        </div>
    );
}

export default Table;