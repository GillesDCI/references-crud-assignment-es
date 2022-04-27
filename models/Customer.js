import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const customerSchema = new Schema({
    
})


const Customer = model('Customer', customerSchema);

export default Customer;