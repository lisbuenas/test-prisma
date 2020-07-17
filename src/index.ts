import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


console.log("test");

async function main(){
    const allUsers = await prisma.user.create({
        data:{
            name:'Felipe2',
            email:'felipe@yahoo2.com.br'
        }
    }).then((err)=> {
        console.log(err);
        console.log('Cadastrou');
    })
    
}

    
main();