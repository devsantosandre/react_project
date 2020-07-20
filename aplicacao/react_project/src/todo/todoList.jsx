import React from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

export default props => {



    const renderRowsArtist = () => {
        const list = props.listArtist || []
        console.log(list)
        return list.map((todo, key) => (
            <tr key={key}>
                <td >{todo.name}</td>
                <td ><i class="fa fa-play"></i></td>
            </tr>
        ))
    }



    const renderRowsAlbum = () => {
        const list = props.listAlbum || []
        console.log(list)
        return list.map((todo, key) => (
            <div key={key} style={{ position: "relative", display: "inline-block", width: "150px", height: "150px" }}>
                <img src={todo.image[3]["#text"]} alt="Snow" style={{ width: "100%" }}></img>
                <div className="bottom-left" style={{ position: "absolute", bottom: "25px", left: "16px", fontWeight: "bolder", color: "white" }}>{todo.name}</div>
                <div className="bottom-left" style={{ position: "absolute", bottom: "8px", left: "16px", color: "white", fontSize: "smaller" }}>{todo.artist}</div>
            </div>
        ))
    }

    return (
        // <div>
        //     <div className="row">
        //         <div className="col-4">
        //             <table className='table'>
        //                 <thead>
        //                     <tr>
        //                         <th>Artistas</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {renderRowsArtist()}
        //                 </tbody>
        //             </table>
        //         </div>
        //         <div className="col-8">
        //             <div style={{ textAlign: "center" }}>
        //                 <h2>Albuns</h2>
        //                 {renderRowsAlbum()}
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div>

        <MDBRow style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", marginTop: "75px", paddingBottom: "20px", paddingTop: "10px", backgroundColor: "white"}}>
            <MDBCol md="4">
                <h2 style={{ paddingLeft: "10px" }}>Artistas</h2>
                <table className='table table-striped'>
                    {/* <thead>
                        <tr>
                            <th>Artistas</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {renderRowsArtist()}
                    </tbody>
                </table>
                <p className="btn btn-link text-right" style={{ textAlign: "end" }}>Mais artistas</p>
            </MDBCol>
            <MDBCol md="8">
                <div>
                    <h2 style={{ paddingLeft: "10px" }}>Albuns</h2>
                    {renderRowsAlbum()}
                    <p className="btn btn-link text-right" style={{ textAlign: "end" }}>Mais Albuns</p>
                </div>
            </MDBCol>
        </MDBRow>
        </div>
    )
}