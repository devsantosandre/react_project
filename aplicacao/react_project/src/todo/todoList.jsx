import React from 'react'

export default props => {



    const renderRowsArtist = () => {
        const list = props.listArtist || []
        console.log(list)
        return list.map(todo => (
            <tr key={todo.mbid}>
                <td >{todo.name}</td>
            </tr>
        ))
    }



    const renderRowsAlbum = () => {
        const list = props.listAlbum || []
        console.log(list)
        return list.map((todo) => ( 
            <div key={todo.mbid} style={{ position: "relative", display: "inline-block", width: "280px", height: "280px" }}>
                <img src={todo.image[3]["#text"]} alt="Snow" style={{ width: "100%" }}></img>
                <div class="bottom-left" style={{ position: "absolute", bottom: "8px", left: "16px", fontWeight: "bolder" }}>{todo.name}</div>
            </div>
        ))
    }

    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Artistas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRowsArtist()}
                        </tbody>
                    </table>
                </div>
                <div className="col-8">
                    <div style={{ textAlign: "center", backgroundColor: "#f5f5f5" }}>
                        <h2>Albuns</h2>
                        {renderRowsAlbum()}
                    </div>
                </div>
            </div>
        </div>

    )
}