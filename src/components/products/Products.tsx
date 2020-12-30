import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, productAdded } from './products_Slice';
import { addBasket } from '../basket/basket_Slice';
import { product_Type } from '../../store/initial_state';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import NotListedLocationOutlinedIcon from '@material-ui/icons/NotListedLocationOutlined';

// css material ui
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    product_div: {
        marginTop: '10px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        textAlign: 'center',
        height: '100%',
    },
    image_css: {
        width: '80%',
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    title: {
        textAlign: 'center',
        color: 'black',
    }
}));

// Component
const Products = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const productList = useSelector(selectProducts);


    // console.log('productList', productList);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {productList.map((product: product_Type) => {
                    return (
                        <Grid item xs={6} sm={4} key={product.id} className={classes.product_div}>
                            <Paper className={classes.paper} elevation={3}>

                                {/* title */}
                                <Typography className={classes.title}> {product.title} </Typography>

                                {/* image */}
                                <Paper elevation={0} className={classes.paper2}>
                                    <img
                                        src={product.imageURL}
                                        alt={product.title}
                                        className={classes.image_css}
                                    />
                                </Paper>

                                <Typography className={classes.text}>

                                    {/* CheckMark Icon */}
                                    <IconButton>
                                        {product.added ? <DoneOutlineOutlinedIcon /> : <NotListedLocationOutlinedIcon />}
                                    </IconButton>

                                    {/* price */}
                                    <span> ${product.price}</span>

                                    {/* shopping cart icon */}
                                    <IconButton
                                        onClick={() => {
                                            dispatch(addBasket(product))
                                            dispatch(productAdded(product.id))
                                        }}
                                    >
                                        <AddShoppingCartIcon />
                                    </IconButton>

                                </Typography>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
};

export default Products;
