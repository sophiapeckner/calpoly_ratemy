import "./comment.css"

export default function Comment () {
    return (
        <div className="comment">
            <div className="commentBody">
                <div className="commentOrg">
                    Name of Org
                </div>
                <div className="commentDesc">
                    <form className="commentForm">
                        <textarea className="commentText" type="text" placeholder="Enter comment here..."></textarea>
                        <button className="commentButton">Submit</button>    
                    </form>
                    
                </div>
            </div>
            
    
        </div>
    )
}