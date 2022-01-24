import React from 'react';
import { useLocation } from "react-router-dom";

function StatisticsPage(props) {
    const  data  = useLocation()

    console.log(data.search);

    return <div>
        
        {data.search ? data.search : '전체'}</div>;
}

export default StatisticsPage;
