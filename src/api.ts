const conta = {
    email: 'victor@gmail.com',
    password: '123456',
    name: 'Victor Lis',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
