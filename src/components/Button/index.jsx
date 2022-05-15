function Button({ bgColor = "bg-button", children, ...props }) {
    return (
        <>
            <button
                className={`rounded-md bg-button hover:opacity-80 my-3 h-10 w-40 text-white font-semibold transform duration-300`}
            >
                {children}
            </button>
        </>
    );
}
function BorderButton({ children, ...props }) {
    return (
        <button
            className={`rounded-md border border-button text-button hover:bg-button hover:text-white transform duration-300 my-3 h-10 px-3`}
        >
            {children}
        </button>
    );
}
function FilterButton({ children, ...props }) {
    return (
        <button className="rounded border-button text-button hover:bg-button hover:text-white transform duration-300 mx-2 p-2">
            {children}
        </button>
    );
}
export { BorderButton, FilterButton };
export default Button;
