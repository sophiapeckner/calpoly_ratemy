import "./event.css"

export default function Event () {
    return (
        <div className="event">
                <div className="eventImage">
                    <img src="/logo192.png" alt=""/>
                </div>
                <div className="eventInfo">
                    <div className="eventTitle">
                        Name of Event
                    </div>
                    <div className="eventDate">
                        00/00/0000
                    </div>
                    <div className="eventDesc">
                        Info about event
                    </div>
                </div>
        </div>
    )
}