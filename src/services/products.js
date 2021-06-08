const chalk = require('chalk');
const p = require('../database');

class ProductsService {
    constructor() {

    }

    async getProduct(productId) {
        try {
            const res = await p.query('select * from product where idproduct=$1', [productId])
            return res.rows[0]
        } catch (error) {
            console.log(chalk.red(error))

        }

    }

    async getProducts({ tags }) {
        try {
            const res = await p.query('select * from product')
            return res.rows
        } catch (error) {
            console.log(chalk.red(error))

        }

    }

    async createProduct(product) {

        try {
            const { name, price, stock } = product;
            const res = await p.query('insert into product (name,price,stock) values ($1,$2,$3)', [name, price, stock])
            return res.rowCount
        } catch (error) {
            console.log(chalk.red(error))

        }
    }

    async updateProduct(product) {
        try {
            const { idproduct, name, price, stock } = product;
            const res = await p.query('update product set name=$2,price=$3,stock=$4 where idproduct=$1', [idproduct, name, price, stock])
            return res.rowCount;
        } catch (error) {
            console.log(chalk.red(error))
        }
    }

    async deleteProduct(productId) {

        try {
            const res = await p.query('delete from product where idproduct=$1', [productId]);
            return res.rowCount;
        } catch (error) {
            console.log(chalk.red(error))

        }

    }
}

module.exports = ProductsService;