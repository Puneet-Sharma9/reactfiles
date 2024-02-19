import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

export const Crudtable = () => {

    const [inputValue, setInputValue] = useState("");
    const [itemList, setItemList] = useState([])

    const handleAddItem = (e) => {
        e.preventDefault()
        let newArray = [...itemList]
        newArray.push(inputValue)
        setItemList(newArray)
        setInputValue('')
    }

    const handleChange = (e) => { setInputValue(e.target.value) }
    console.log(inputValue)
    return (
        <div>
            <form>
                <input type='text' name='category' value={inputValue} onChange={(event) => handleChange(event)}></input>
                <button type="submit" onClick={(e)=>handleAddItem(e)}>Add</button>
            </form>

            {itemList.length > 0 &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((item, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                            </tr>

                        )}


                    </tbody>
                </Table>
            }

        </div>
    )
}
