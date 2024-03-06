import * as Styles from "./styles";
import React, { useMemo, useState } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination,
    useExpanded,
    useRowSelect,
} from "react-table";
import Search from "../searchBar";
import { log } from "console";
const TableReact = ({ column_header, table_header, column_data, search_bar, down_arrow, dashboardtext, dashboardrighttext, renderRowSubComponent }: any) => {
    console.log("column_data11", column_data);



    const columns = column_header;
    const data = column_data;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        prepareRow,
        visibleColumns,
    }: any = useTable<any>(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        useExpanded,
        usePagination,
        useRowSelect
    );

    const { globalFilter } = state;
    const [toggle, setToggle] = useState<boolean>(false);
    const collapseTable = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <Styles.MainWrapper>
                <Styles.Wrapper>
                    <Styles.TableHeaderWrapper>
                        <div>
                            <Styles.TableHeaderText dashboardtext={dashboardtext}>
                                {table_header}
                            </Styles.TableHeaderText>
                        </div>


                        {search_bar && (
                            <Search
                                globalFilter={globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        )}
                        {/* show down arrow */}
                    </Styles.TableHeaderWrapper>
                    {/* //toggle table rows */}


                    <Styles.Table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup: any, i: number) => (
                                <Styles.TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column: any, i: number) => (
                                        <Styles.TableHeader1
                                            key={i}
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                        >
                                            {column.render("Header")}

                                        </Styles.TableHeader1>
                                    ))}
                                </Styles.TableRow>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row: any, i: number) => {
                                prepareRow(row);
                                return (
                                    <React.Fragment key={i}>
                                        <Styles.TableRow {...row.getRowProps()}>
                                            {row.cells.map((cell: any, i: number) => {
                                                return (
                                                    <Styles.TableData key={i} {...cell.getCellProps()}>
                                                        {cell.render("Cell")}
                                                    </Styles.TableData>
                                                );
                                            })}
                                        </Styles.TableRow>
                                        {row.isExpanded ? (
                                            <Styles.ExtendedTableRow>
                                                <td colSpan={visibleColumns.length}>
                                                    {renderRowSubComponent({ row })}
                                                </td>
                                            </Styles.ExtendedTableRow>
                                        ) : null}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </Styles.Table>

                </Styles.Wrapper>
            </Styles.MainWrapper>
            <div>
                <button onClick={() => previousPage()}>Previous</button>
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    )
}
export default TableReact;