import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book(){

    const navigate=useNavigate();

    const getApiCall=useQuery(
        {
            queryKey:["BOOK_GET_ALL_API"],
            queryFn(){
                return axios.get("http://localhost:8080/book/list")
            }
        }
    )

    const deleteApi=useMutation({
        mutationKey:["DELETE_BOOK_API"],
        mutationFn(id:number){
            return axios.delete("http://localhost:8080/book/delete/"+id);
        },onSuccess(){
            getApiCall.refetch();
        }
    })

    return (<>
    this is ground list page
    <button onClick={()=>navigate("/admin/book/add")}>Add Book</button>

    <table>
        <thead>
            <tr>
                <th>Book Name</th>
                <th>Book Genres</th>
                <th>Action</th>
                </tr>
        </thead>
        
        <tbody>
        {getApiCall?.data?.data?.data?.map((i:any)=>(
            <tr>
                <td>{i?.book_name}</td>
                <td>{i?.genres}</td>
                <td>
                    <button onClick={()=>navigate("/admin/book/edit/"+i?.id)}>Edit</button> | 
                    <button onClick={()=>deleteApi.mutate(i?.id)}>Delete</button>
                </td>
            </tr>
             ))}
        </tbody>
       
    </table>

    </>)
}

export default Book;