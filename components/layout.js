import Navigation from "./navigation";

export default function Layout({ children }) {
    return (
        <>
            <div className="navigation">
                <Navigation></Navigation>
            </div>
            <div className="content">{children}</div>
        </>
    );
}
