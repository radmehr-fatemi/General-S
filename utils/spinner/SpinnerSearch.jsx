
import { Circles, Triangle } from 'react-loader-spinner';

const SpinnerSearch = () => {
    return (
        <div style={{
            width: "100vw",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }} >
            <Circles
                height="100"
                width="100"
                color="#00B4C2"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    );
};

export default SpinnerSearch;