import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={`transition-colors duration-500 hover:text-gray-700 ${match ? "text-gray-700" : "text-white"}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}