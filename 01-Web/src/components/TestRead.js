import { useState, useEffect } from "react";
import TutorialService from "../services/TutorialService";

const TestRead = () => {
    const [tutor, setTutor] = useState([]);  
    //const urlIni = "http://192.168.1.21:8080/api";
    //const axTutor = axios.create({baseURL: `${urlIni}/tutorials` });

    useEffect(() => {
      TutorialService.getAll()
          .then(response => {
              setTutor(response.data);
              console.log(response.data);
          })
          .catch(e => {
              console.log(e);
          });
    }, []);
  
    return(
        <div>
        <br/>
        <br/>
        <br/>
        <p>------------------------------------</p>
            <h1>TEST - DB Read</h1>
            {tutor.map((tutorial) => {
            return (
                <div className="post-card" key={tutorial.id}>
                    <h3>Name: {tutorial.title}</h3>
                    <ul>                    
                    <li style={{marginLeft: "2.5em", color: "blue"}}>Description: {tutorial.description}</li>
                    <li style={{marginLeft: "2.5em", color: "blue"}}>
                        Published: 
                        {tutorial.published ? ' Yes' : ' No'}
                    </li>
                    <li style={{marginLeft: "2.5em", color: "blue"}}>Created At: {tutorial.createdAt}</li>
                    </ul>
                </div>
            );
            })}
        </div>
    )
}

export default TestRead

// AXIOS SIMPE WORKING
// ===================
// axios
// .get("http://localhost:8080/api/tutorials")
// .then((res) => {
//   let myData = res
//   console.log(myData)
//   console.log(myData.data[0].title)
// })

// AXIOS WITH ASYNC
// ===================
// async function getTutorials(){
//   const resp = await axios
//     .get(`${urlIni}/tutorials`)
//   // destructure axios response in only data return
//   const {data} = resp;

//   console.log(data)
// } 
// getTutorials()

// MORE COMPLEXT AXIOS WITH RENDER
// ===============================

// const [tutor, setTutor] = useState([]);  
//   const urlIni = "http://192.168.1.21:8080/api";
//   const axTutor = axios.create({baseURL: `${urlIni}/tutorials` });

//   useEffect(() =>{
//     axTutor
//       .get()
//       .then((resp) => {
//         setTutor(resp.data);
//       })
//       .catch((err) => {
//         console.log("ERROR: ",err)
//       });
//   // eslint-disable-next-line 
//   }, [])
//   console.log("data:", tutor)
  

//   return (
//     <div className="app">
//     <h2>All Tutorials</h2>
//     {tutor.map((tutorial) => {
//        return (
//           <div className="post-card" key={tutorial.id}>
//              <h2>Name: {tutorial.title}</h2>
//              <p style={{marginLeft: "2.5em", color: "blue"}}>{tutorial.description}</p>
//              <p style={{marginLeft: "2.5em", color: "green"}}>{tutorial.createdAt}</p>
//           </div>
//        );
//     })}
//   </div>
//   );