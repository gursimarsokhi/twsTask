import axios, { all } from "axios";
import React, { useState, useEffect } from "react";
import TableReact from "../shared/table/TableReact";
import { COLUMNS } from "../shared/table/Columns";
import { log } from "console";

const Users = () => {
    const [allData, saveAllData] = useState([]);
    const [finalData, saveFinalData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/users",
                };
                const response = await axios(config);
                console.log(response.data, response);
                saveAllData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        console.log("queryRes", allData);

        fetchData();
    }, []);
    console.log(allData);
    const renderRowSubComponent2 = React.useCallback(
        ({ row }: any) => <div>Hello</div>,
        []
    );
    let finalArray: any = [];
    allData.map((v: any, k: number) => {
        console.log("value 1", v);
        let obj: any = {};
        obj.id = v.id;
        obj.name = v.name;
        obj.email = v.email;
        obj.username = v.username;
        obj.city = v.address.city;
        finalArray.push(obj);
        //return finalArray;
    })
    console.log("finalArray", finalArray);
    //saveFinalData(finalArray);
    console.log(finalData);

    return (
        <div>
            {/* users: */}
            {/* <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
                {allData.map((val: any, key: number) => {
                    return (
                        <tr key={key} >
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.address.city}</td>
                        </tr>
                    )
                })}
            </table> */}
            <TableReact
                column_header={COLUMNS}
                column_data={finalArray}
                table_header="LIST OF USERS"
                search_bar={true}
            />
        </div>
    );
}
export default Users