const Order = require('../model/order')

exports.getOrder = async (req, res) => {

    //get Order
}

exports.getOrders = async (req, res) => {

    //get Orders
}



exports.CreateOrder = async (req, res) => {
    //create
    try {
        // const {name , city} = req.body;
        if(req.body.product != '' || req.body.customer_id != ''){
            //create
            const order = await Order.query().insertGraph({
                product: req.body.product,
                customer_id: req.body.customer_id,
                price: req.body.price
            });
            if(!order){
                throw new Error("check db connection, customer table doesn't exit")
            }
           return res.status(200).json(order)
        }// if condition ends here
        
          return  res.status(409).json({message: "please fill all fields"})
            
        }catch (error) {
            console.log(error);
            res.status(500).send('Server error'); //error
        }
}

exports.deleteOrder = async (req, res) => {
    //delete Order
}

exports.updateOrder = async (req, res) => {

}

