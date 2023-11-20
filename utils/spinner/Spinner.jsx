import { Triangle } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center" }} >
            <Triangle
                height="200"
                width="200"
                color="rgb(44, 169, 178)"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;