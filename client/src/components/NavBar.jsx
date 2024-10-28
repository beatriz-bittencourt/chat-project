import { useContext } from "react";
import { Container, Nav, Navbar as BootstrapNavbar, Stack } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => { 
    const { user, logoutUser } = useContext(AuthContext);

    return ( 
        <BootstrapNavbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
            <Container>
                <h2>
                    <Link to="/" className="link-light text-decoration-none">ChatApp</Link>
                </h2>

                <span className="text-warning">
                    {user ? `Logged in as ${user.name}` : ""}
                </span>

                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        {user ? (
                            <Link onClick={logoutUser} to="/login" className="link-light text-decoration-none">Logout</Link>
                        ) : (
                            <>
                                <Link to="/login" className="link-light text-decoration-none">Login</Link>
                                <Link to="/register" className="link-light text-decoration-none">Register</Link>
                            </>
                        )}
                    </Stack>
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

 
export default NavBar;
