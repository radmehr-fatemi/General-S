import { useRouter } from "next/router";
import { useState } from "react";
import { Triangle } from 'react-loader-spinner';

const Spinner = () => {

    const router = useRouter();
    const [late, setLate] = useState(false);

    setTimeout(() => setLate(true), 6000)

    return (
        <div style={{
            width: "100vw",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }} >
            <Triangle
                height="200"
                width="200"
                color="rgb(44, 169, 178)"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
            {
                late && <button
                onClick={ () => router.reload() }
                 style={{
                    padding:".2rem 2rem",
                    margin:"1rem",
                    borderRadius:"4px",
                    border:"1px solid #00B4C2",
                    color:"#00B4C2",
                    background:"none",
                    animation:"Show .3s"
                }} > Try again </button>
            }
        </div>
    );
};

export default Spinner;