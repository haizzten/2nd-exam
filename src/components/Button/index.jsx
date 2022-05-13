function Button({ bgColor = "bg-button", ...props }) {
    return (
        <>
            <button
                className={`rounded-md bg-button hover:opacity-80 my-3 h-10 w-40 text-white font-semibold transform duration-300`}
            >
                {props.children}
            </button>
        </>
    );
}
function BorderButton(props) {
    return (
        <button
            className={`rounded-md border border-button text-button hover:bg-button hover:text-white transform duration-300 my-3 h-10 px-3`}
        >
            See all
        </button>
    );
}
export { BorderButton };
export default Button;
