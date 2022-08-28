import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form,Button, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect,useState } from "react";

export default function ListNews(){
        const [newsList, setnews] = useState([]);
        
        const getNews=()=>{
            axios.get(`http://localhost/newsapi/index.php`)
            .then(res => {
                setnews(res.data)
            })
            return 1
        }
        useEffect(() => {
            getNews()  
        })
        
    return (
        <div>
            <h2>Show</h2>
            <Table bordered>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Edit
                    </th>
                </tr>
                    {
                        newsList.map(
                            (newsList)=>
                            <tr>
                            <td>{newsList.id}</td>
                            <td>{newsList.title}</td>
                            <td>Edit</td>
                            </tr>
                        )
                    }
            </Table>
        </div>
    );
}