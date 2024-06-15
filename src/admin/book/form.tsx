import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function BookForm(){

    
    const{id}=useParams();

    console.log(id);

    const {data:getById}=useQuery({
        queryKey:["BOOK_GET_BY_ID"],
        queryFn(){
            return axios.get("http://localhost:8080/book/getById/" + id)
        },
        enabled:!!id,
        staleTime:0,
        
    })

    console.log(getById?.data)

    const {register,handleSubmit}=useForm({
        values:id?{...getById?.data,bookName:getById?.data.name}:{}
    });

    const navigate=useNavigate();

    const apiCall=useMutation({
        mutationKey:["BOOK_SAVE_API"],
        mutationFn(requestBody:any){
            if(requestBody?.id){
                return axios.put("http://localhost:8080/book/update",requestBody)
            }
            return axios.post("http://localhost:8080/book/save",requestBody)
        },onSuccess(){
            navigate("/admin/book")
        }
    })


    const submit=(values:any)=>{
        apiCall.mutate(values,{
            onSuccess(res){
               alert(res?.data?.message)
            }
        })
    }

    return (<>
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <label>Book Genres</label>
                            <input type="text" {...register("genres")} /> 
                        </div>
                        <div>
                            <label>Book Name</label>
                            <input type="text" {...register("book_name")}/>
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
    </>)
}
export default BookForm;