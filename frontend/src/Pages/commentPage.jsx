
import "./commentPage.css"
import { useState } from "react"
import axios from "axios"

export default function CommentPage () {
    const [rate,setRate]=useState()
    const [commentValue,setCommentValue]=useState()

    const handleSubmit=(e)=>{
        console.log("rating: "+rate)
        console.log("comment: "+commentValue)

        let res= axios.patch("http://localhost:3001/updateOrganization/324513",{Comment:commentValue,Rating:rate}).then(function (response) { console.log(response);})
    }
    return (
        <div className="comment">
            <div className="commentBody">
                <div className="commentOrg">
                    Name of Org
                </div>
                <div className="commentDesc">
                    <form className="commentForm" onSubmit={handleSubmit}>
                        <label>Enter your rating 1-5</label>
                        <input className="commentStar" type="number" placeholder="num" onChange={(e)=>setRate(e.target.value)}/>
                        <textarea className="commentText" type="text" placeholder="Enter comment here..." onChange={(e)=>setCommentValue(e.target.value)}></textarea>
                        <button className="commentButton">Submit</button>    
                    </form>
                    
                </div>
            </div>
        
            
    
        </div>
    )
}