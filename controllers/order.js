const Order = require('../model/order')

exports.getOrder = async (req, res) => {

    //get Order
}

exports.getOrders = async (req, res) => {
    try{

    //get Orders
    const { customer_id } = req.body;

   if(!customer_id){
    return res.status(409).json({message : 'request must have have customer_id '})
   }
    const order  = await Order.query()
    .where('customer_id', customer_id)
     .orderBy('id');
     
     if(!order){
         throw new Error('customer id deosnt exit')
        }
    res.status(200).json({message : 'orders from customer', order} );
    
    }catch (error) {
    console.log(error);
    res.status(500).send('Server error'); //error
}

}



exports.CreateOrder = async (req, res) => {
    //create
    try {
        // const {name , city} = req.body;
        if(req.body.product_id != '' || req.body.customer_id != ''){
            //create
            const order = await Order.query().insertGraph({
                product_id: req.body.product_id,
                customer_id: req.body.customer_id,
                price: req.body.price
            });
            if(!order){
                throw new Error("check db connection, customer table doesn't exit")
            }
           return res.status(200).json(order)
        }// if condition ends here
        
          return  res.status(409).json({message: "cannot create order without customer id or product id"})
            
        }catch (error) {
            console.log(error);
            res.status(500).send('Server error'); //error
        }
}

exports.getOrderWithCustomerId = async (req, res) => {
    const {customerId } = req.params;
    const orders = Order.query().select('*').where('customer_id', customerId).orderBy('id');
    return res.status(200).json(orders)

}

exports.deleteOrder = async (req, res) => {
    //delete Order
}

exports.updateOrder = async (req, res) => {

}

