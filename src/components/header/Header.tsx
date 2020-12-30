import React from 'react';
import { useSelector } from 'react-redux';
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
        toolbar: {
            background: 'radial-gradient(circle, rgba(174,238,237,0.9976365546218487) 0%, rgba(155,148,233,1) 100%)',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        sectionDesktop: {
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

    const productList = useSelector(selectBasket);


    // RETURN
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>

                    <IconButton
                        onClick={() => setPage('products')}
                        aria-label="show products" color="inherit">
                        <HomeRoundedIcon fontSize="large" />
                    </IconButton>

                    <Typography className={classes.title} variant="h6" noWrap>
                        B/\SKET REDUX
                    </Typography>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton
                            onClick={() => setPage('basket')}
                            aria-label="show basket length" color="inherit"
                        >
                            <Badge badgeContent={productList.length} color="secondary">
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
