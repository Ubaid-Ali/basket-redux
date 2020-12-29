import React from 'react';
import {useSelector} from 'react-redux';
import { selectBasket } from '../basket/basket_Slice';

// material ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        sectionDesktop: {
            border: '1px solid black',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
    }),
);

interface Props {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

// HEADER COMPONENT
const Header: React.FC<Props> = ({ setPage }) => {
    const classes = useStyles();

    const data = useSelector(selectBasket)


    // RETURN
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        B/\SKET REDUX
                    </Typography>
                    <IconButton
                        onClick={() => setPage('products')}
                        aria-label="show 4 new mails" color="inherit">

                        <HomeRoundedIcon fontSize="large" />
                    </IconButton>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            onClick={() => setPage('basket')}
                            aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;
