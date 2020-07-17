import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

prisma.user.create({
    data:{
        name:'Felipe',
        email:'felipe@yahoo.com.br'
    }
})