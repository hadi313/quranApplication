import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading'

function Preloader() {
    
    

    return (
        <div>
            <ReactLoading type={"cubes"} color={"#03fc4e"} height={100} width={100} />
        </div>
    );
}

export default Preloader;
