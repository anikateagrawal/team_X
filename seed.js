const mongoose=require('mongoose');
const client=require('./models/client');


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
    console.log('clients Seeded');
}

module.exports=seedDB;