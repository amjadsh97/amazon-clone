import React, {useEffect, useState} from 'react';
import './Orders.css';
import {useStateValue} from "./StateProvider";
import {db} from "./firebase";
import Order from "./Order";

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrder(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                })
        } else {
            setOrder([]);
        }

    }, []);

    return (
        <div className="order">
            <h1>Order</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    );
}

export default Orders;
