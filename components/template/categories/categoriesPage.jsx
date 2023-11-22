import Link from "next/link";

const CategoriesPage = ({ categories }) => {
    return (
        <div>
            {
                categories.map( item => (
                    <Link href={`/search?q=${item}`} > { item } </Link>
                ) )
            }
        </div>
    );
};

export default CategoriesPage;