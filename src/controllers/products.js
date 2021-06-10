const { response } = require('express');
const chalk = require('chalk');
const pool = require('../database')

const productsService = require('../services/products');

const productService = new productsService();

const productController = {}

productController.getProducts = async (req, res) => {
    const tags = req.query;
    try {
        const products = await productService.getProducts(tags)
        res.status(200).json(products)
        console.log(products)
    } catch (error) {
        console.log(chalk(error))
        return res.status(500).json('Internal Server error');
    }
}

productController.getProduct = async (req, res) => {
    try {
        const idproduct = req.params.id
        const product = await productService.getProduct(idproduct);
        return res.status(200).json(product)
    } catch (error) {
        console.log(chalk.red(error))
        return res.status(500).json('Internal Server error');
    }
}

productController.createProduct = async (req, res) => {
    try {
        const product = req.body;
        const response = await productService.createProduct(product)
        if (response === 1) {
            res.status(201).json({ status: 201, msg: 'created', data: product })
        }

    } catch (error) {
        console.log(chalk.red(error))
        return res.status(201).json('Internal Server error');
    }
}

productController.updateProduct = async (req, res) => {
    try {

        const { name, stock, price } = req.body
        const idproduct = req.params.id
        const product = { idproduct, name, stock, price }
        const response = await productService.updateProduct(product)
        if (response === 1) {
            return res.status(200).json({ status: 200, msg: 'updated' })
        }

    } catch (error) {
        console.log(chalk.red(error))
        return res.status(500).json('Internal Server error');
    }
}

productController.deleteProduct = async (req, res) => {
    try {
        const idproduct = req.params.id
        const response = await productService.deleteProduct(idproduct)

        if (response === 1) {
            return res.status(200).json({ status: 200, msg: 'deleted' })
        }
        else if (response === 0) {
            return res.status(404).json({ status: 404, msg: 'The register does not exists' })

        }


    } catch (error) {
        console.log(chalk.red(error))
        return res.status(500).json('Internal Server error');
    }
}

module.exports = productController;