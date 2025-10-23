import { Routes, Route } from "react-router-dom"
import TutorialList from "./TutorialList"
import Tutorial from "./Tutorial"
import AddTutorial from "./AddTutorial"

function MainPannel() {
    return (
        <div className="container mt-3">
            <Routes>
                <Route path="/" element={<TutorialList />} />
                <Route path="/tutorials" element={<TutorialList />} />
                <Route path="/add" element={<AddTutorial />} />
                <Route path="/tutorials/:id" element={<Tutorial />} />
            </Routes>
        </div>
    )
}
export default MainPannel