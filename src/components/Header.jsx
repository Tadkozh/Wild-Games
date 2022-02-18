import './Header.css';

export const Header = ({name}) => {
    return(
        <>
            <h1 className="big-title">Welcome to {name}</h1>
        </>
    )
}