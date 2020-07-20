import React from 'react'
import { MDBRow, MDBCol} from "mdbreact";

export default props => {

    const renderRowsArtist = () => {
        const list = props.listArtist || []
        return list.map((todo, key) => (
            <tr key={key}>
                <td >{todo.name}</td>
                <td ><i className="fa fa-play"></i></td>
            </tr>
        ))
    }

    const renderRowsAlbum = () => {
        const list = props.listAlbum || []
        return list.map((todo, key) => (
            <div key={key} className='capaDisco'>
                <img src={todo.image[3]["#text"]} alt="Snow" style={{ width: "100%" }}></img>
                <div className="bottom-left albumLabel">{todo.name}</div>
                <div className="bottom-left artistLabel">{todo.artist}</div>
            </div>
        ))
    }

    return (
        <div>
            <MDBRow className='cardApp'>
                <MDBCol md="4">
                    <h2>Artistas</h2>
                    <table className='table table-striped'>
                        <tbody>
                            {renderRowsArtist()}
                        </tbody>
                    </table>
                    <p className="btn btn-link text-right">Mais artistas</p>
                </MDBCol>
                <MDBCol md="8">
                    <div>
                        <h2>Albuns</h2>
                        {renderRowsAlbum()}
                        <p className="btn btn-link text-right">Mais Albuns</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    )
}