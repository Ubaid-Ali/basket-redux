import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBasket, removeBasket } from './basket_Slice';
import { product_Type } from '../../store/initial_state';
import './basket.css';
import IMAGE from './cart.png';

// Mmaterial ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: '5px',
        },
        paper: {
            padding: theme.spacing(2),
            margin: '10px auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);

function Basket() {
    const classes = useStyles();
    const basketList = useSelector(selectBasket);
    const dispatch = useDispatch();

    // Total Amount
    let total: number = 0;
    for (let item of basketList) {
        total += item.price
    }

    return (
        <div className="basket_container">
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <img src={IMAGE} alt='basket' className="cart-img" />

                    {basketList.length === 0 ?
                        <div><p>Basket is Empty</p></div> :
                        null
                    }

                    <div className="total">
                        Total <span className="total_amount"> ${total}</span>
                    </div>
                </Paper>
            </Grid>

            {basketList.map((product: product_Type) => {
                let { title, imageURL, price, id } = product;
                return (
                    <div className={classes.root} key={id}>
                        <Paper className={classes.paper} elevation={3}>
                            <Grid container spacing={2} className='basket_item'>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={imageURL} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Product
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Quantity: 1
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography onClick={() => dispatch(removeBasket(id))} variant="body2" style={{ cursor: 'pointer' }}>
                                                <Button color="secondary">remove</Button>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">${price}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                )
            })}
        </div>
    );
}

export default Basket;