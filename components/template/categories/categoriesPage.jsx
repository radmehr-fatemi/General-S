import Link from "next/link";

const CategoriesPage = ({ categories }) => {
    return (
        <div>
            {
                categories.map( (item ,index) => (
                    <Link href={`/search?q=${item}`} key={index} > { item } </Link>
                ) )
            }
        </div>
    );
};

export default CategoriesPage;