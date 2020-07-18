import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return  (
            console.log(props.list)
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}