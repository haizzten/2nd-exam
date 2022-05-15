function Button({ bgColor = "bg-button", children, ...props }) {
    return (
        <>
            <button
                disabled={props.dis}
                onClick={props.onClick}
                className={`rounded-md bg-button hover:saturate-150 active:bg-sky-800 my-3 h-10 w-40 text-white font-semibold transform duration-200`}
            >
                {children}
            </button>
        </>
    );
}
function BorderButton({ children, ...props }) {
    return (
        <button
            disabled={props.dis}
            onClick={props.onClick}
            className={`rounded-md border border-button text-button hover:bg-button hover:text-white active:bg-sky-800 transform duration-200 my-3 h-10 px-3`}
        >
            {children}
        </button>
    );
}
function SmallButton({ children, ...props }) {
    return (
        <button
            disabled={props.disable}
            onClick={props.onClick}
            className="rounded border-button text-button hover:bg-button hover:text-white active:bg-sky-800 disabled:bg-transparent disabled:text-zinc-400 transform duration-200 mx-2 p-2"
        >
            {children}
        </button>
    );
}
export { BorderButton, SmallButton };
export default Button;
