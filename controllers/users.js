const { prisma } = require('@prisma/client').PrismaClient
const brypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    res.send('login');

    if(!email && password){
        return res.status(400).json({message:'Пожайлуста, заполните поля'})
    }
    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    });
    const isPasswordCorrect = user && (await brypt.compare(password, user.password));
    if(user && isPasswordCorrect){
        res.status(200).json({
            id: user.id,
            email: user.email,
            name : user.name,
        })
    }else {
        return res.status(400).json({message:'Неверный логин или пароль'})
    }
}
const register = async (req, res) => {
    res.send('register');
}
const current = async (req, res) => {
    res.send('current');
}

module.exports = {
    login,
    register,
    current
}