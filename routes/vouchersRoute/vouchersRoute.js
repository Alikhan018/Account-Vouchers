const express = require('express');
const VoucherController = require('../../controllers/vouchers/vouchersController');

class VouchersRouter{
    //initialzing express router
    constructor(){
        this.router = express.Router();
        this.routes();
    }
    //defining routes and their respective callbacks
    routes() {
        this.router.get('/', VoucherController.viewVouchers);
        this.router.post('/getvoucher', VoucherController.getVoucher);
        this.router.get('/edit', VoucherController.updateVoucherPage);
        this.router.post('/update', VoucherController.updateVoucherData);
        this.router.delete('/delete', VoucherController.deleteVoucherController);
        this.router.get('/create-page', VoucherController.createPage);
        this.router.post('/create', VoucherController.createVoucher);
    }
}

module.exports = new VouchersRouter().router;