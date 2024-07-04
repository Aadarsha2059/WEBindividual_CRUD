


import { useForm } from "react-hook-form";
import "../assets/css/donorspage.css"
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

function DonorsPage(){

const{register,handleSubmit}=useForm();

const apiCallToGet=useQuery({
    queryKey:["GT_DATa"],
    queryFn(){
        return axios.get("http://localhost:8080/book")
    }
})

console.log(apiCallToGet?.data?.data)

const apiCallTosave=useMutation({
    mutationKey:["SAVE_BOOK_DATA"],
    mutationFn(data){
return axios.post("http://localhost:8080/book",data)
    }

})

const submit=(data:any)=>{
    console.log({...data,userId:localStorage.getItem("loggeinUserId")});
    apiCallTosave.mutate({...data,userId:localStorage.getItem("loggeinUserId")},{
        onSuccess(){
            alert("Book Added Successfully");
            apiCallToGet.refetch();
        }
    })
    // axios.post("http://localhost:8080/book",{...data,userId:localStorage.getItem("loggeinUserId")}).then(res=>{
    //     console.log(res);
    //     alert(res?.data?.message)
    // })
}

const deleteApiCall=useMutation({
    mutationKey:["DELETE_BOOK_DATA"],
    mutationFn(id:any){
        return axios.delete("http://localhost:8080/book/"+id)
    }
})

    return (
    <div className="container">
        <h1>Donate My Book</h1>
        <form onSubmit={handleSubmit(submit)} id="donatehtmlForm">
            {/* <label htmlFor="bookImage">Book Image / File:</label>
            <input type="file" id="bookImage"   accept=".png, .pdf, .doc, .docx" required /> */}
            
            <label htmlFor="bookGenre">Genre:</label>
            <select id="bookGenre" {...register("genres")} required>
                <option value="">Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Biography">Biography</option>
                <option value="Poetry">Poetry</option>
                <option value="Religion">Religion</option>
                <option value="Spirituality">Spirituality</option>
            </select>
            
            <label htmlFor="bookName">Book Name:</label>
            <input type="text" id="bookName" {...register("booksName")} required />
            
            <button type="submit" id="submitBtn">Donate Here</button>
        </form>
        
        <h2>Donated Books</h2>
        <table id="donatedBooksTable">
            <thead>
                <tr>
                    <th>Book ID</th>
                    {/* <th>Book Image / File</th> */}
                    <th>Genre</th>
                    <th>Book Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {apiCallToGet?.data?.data?.map((d:any)=>{
                    return (


                        <tr>
                            <td>{d.id}</td>
                            <td>{d.genres}</td>
                            <td>{d.booksName}</td>
                            <td><button onClick={() => deleteApiCall.mutate(d.id, { onSuccess() { apiCallToGet.refetch(); } })}>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>

)
}


export default DonorsPage;