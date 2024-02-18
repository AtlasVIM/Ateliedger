import { SidebarData } from "./SidebarData"

export default function Sidebar() {


    return(
    <div id="sidebar">
        <ul id="sidebar-data">
            {SidebarData.map((val, key) => {
        
                return (
                    <li className="row" id={window.location.pathname == val.route ? "active" : ""}  key={key} onClick={() => {window.location.pathname = val.route}}>
                        <div className="icon">{val.icon}</div>
                        {" "}
                        <div className="title"><strong>{val.title}</strong></div>
                    </li>
                )
            
        })}
        </ul>
    </div>
    )
}