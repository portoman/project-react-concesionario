import UploadCar from '../components/UploadCar/UploadCar';
import Stack from 'react-bootstrap/Stack'
import UploadClient from '../components/UploadClient/UploadClient';

function Uploads() {

    return (

        <>
            <Stack  gap={1}>
                <UploadCar />
                <UploadClient/>
            </Stack>
        </>
    );
}

export default Uploads;