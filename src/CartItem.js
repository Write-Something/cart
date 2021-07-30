import React from 'react';

// for binding we can either use bind() when we are giving event name{onClick={this.increaseQuantity.bind(this)}}
// or in constructor this.increaseQuantity = this.increaseQuantity.bind(this).
// if we don't want to use bind the use arrow function to bind the state .

class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img:''
        }
        
    }

    increaseQuantity = () => {
        console.log("this.qty",this.state);
    }

    render(){
     const {price,title,qty} = this.state;
     return(   <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={ { fontSize : 25 } }>{title}</div>
                <div style={ { color : '#777' } }>Rs: {price}</div>
                <div style={ { color : '#777' } }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons*/}
                    <img alt="increase" 
                        className="action-icons"
                        onClick={this.increaseQuantity}
                     src="https://as1.ftcdn.net/v2/jpg/02/51/03/82/1000_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg"/>
                    <img alt="decrease" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/02/78/84/57/1000_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"/>
                    <img alt="delete" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/02/58/95/14/1000_F_258951445_Md7JDFw3Qj4LPTorWUYdImTzS49fSnOf.jpg"/>
                </div>

            </div>
        </div>
     );}
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;