import axios from 'axios'
import React, {useEffect, useState} from 'react'


function BesoftComponents() {
    const [besoft, setBesoft] = useState([]);
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/list.php?i=list`)
            .then(res => {
                const data = res.data
                console.log(data)
                setBesoft(data)
            })
    }, [])
    console.log(besoft)
    return (
        <div>

        </div>
    )
}

export default BesoftComponents
