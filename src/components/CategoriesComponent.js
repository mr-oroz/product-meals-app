import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Row} from 'react-bootstrap';

const CategoriesComponent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/categories.php`)
            .then(res => {
                const data = res.data.categories
                setCategories(data)
            })
    }, [])
    return (
        <Row variant='justify-content-between '>
            {
                categories.map((v, i) => {
                    return (
                        <div key={i} className='shadow-lg rounded p-4 bg-body col-xxl-3 col-xl-3 col-lg-3 col-md-3 m-4'>
                            <img
                                style={{
                                    width: '100%',
                                    height: '200',
                                    cursor: 'pointer'                                }}
                                src={v.strCategoryThumb} alt="" />
                            <p
                                style={{ cursor: 'pointer' }}
                            >({v.strCategory})</p>
                        </div>

                    )
                })
            }
        </Row>
    );
};

export default CategoriesComponent;