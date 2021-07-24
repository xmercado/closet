import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position='static' color='primary'>
            <Container maxWidth='md'>
                <Toolbar>
                    <Typography variant='title' color='inherit'>
                        Closet
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;