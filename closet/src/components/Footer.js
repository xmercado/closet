import { AppBar, Toolbar, Typography } from '@material-ui/core';

import styled from 'styled-components';

const FooterContainer = styled.div`
    text-align: center;
    bottom: 0;
    position: absolute;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Footer = () => {
    return (
        <AppBar position='static' color='primary'>
            <FooterContainer>
                <Toolbar>
                    <Typography variant='title' color='inherit'>
                        Closet
                    </Typography>
                </Toolbar>
            </FooterContainer>
        </AppBar>
    );
};

export default Footer;