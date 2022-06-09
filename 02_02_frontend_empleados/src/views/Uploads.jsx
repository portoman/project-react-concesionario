import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from 'react';
import UploadCar from '../components/UploadCar/UploadCar';
import ModificateCar from '../components/ModificateCar/ModificateCar';
import Stack from 'react-bootstrap/Stack'

function Uploads() {


    return (

        <>
            <Stack  gap={1}>
                <UploadCar />
            </Stack>
        </>
    );
}

export default Uploads;