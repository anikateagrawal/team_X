const mongoose=require('mongoose');
const client=require('./models/client');
const User=require('./models/user');

const arr=[
    {
        name:'a1',
        contact:'1234',
        email:'abc.gmail',
        address:'xyz'
    },
    {
        name:'a1',
        contact:'1234',
        email:'abc.gmail',
        address:'xyz'
    },
    {
        name:'a1',
        contact:'1234',
        email:'abc.gmail',
        address:'xyz'
    },
    {
        name:'a1',
        contact:'1234',
        email:'abc.gmail',
        address:'xyz'
    },
]


async function seedDB(){
    await client.deleteMany({});
    await client.insertMany(arr);
    const admin=new User({username:'admin',email:'admin@gmail.com',contact:999999999,isAdmin:true});
    await User.register(admin,'12345');
    console.log('clients Seeded');
}

module.exports=seedDB;