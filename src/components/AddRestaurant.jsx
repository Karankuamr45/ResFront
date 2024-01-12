import { useState } from "react";
import axios from 'axios';
const AddRestaurant=()=>{

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [rating,setRating]=useState('');

    const handleAddRestaurant=async(e)=>{
        e.preventDefault()
        const restaurantData={
            name:name,
            description:description,
            rating:Number(rating),

        }
        try {
           const response=await axios.post("http://localhost:9000/addRestaurant",restaurantData)
           console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div>
            <form onSubmit={handleAddRestaurant}>
                <label htmlFor="name">Name :</label>
                <input 
                type="text" 
                placeholder="Name"

                onChange={(e)=>setName(e.target.value)} />
                <br></br>
                <label htmlFor="decription">Description :</label>
                <textarea 
                name=""
                id=""
                cols="30" 
                rows="10"
                onChange={(e)=>setDescription(e.target.value)}
                ></textarea>
                <br></br>
                <label htmlFor="rating">Rating :</label>
                <input 
                type="number" 
                placeholder='Number'
                onChange={(e)=>setRating(e.target.value)}
                 />

                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )

}


export default AddRestaurant;