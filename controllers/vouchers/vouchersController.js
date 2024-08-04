const Vouchers = require('../../models/Vouchers');
const uuid = require('uuid')

class VoucherController{
    constructor() {
        this.voucher = {}
    }
    static async viewVouchers(req, res) {
        try {
            const vouchers = await Vouchers.viewAll();
            res.render('Vouchers', {title: 'Vouchers', vouchers: vouchers});
        } catch(err) {
            console.log(err);
            res.json({message: err});
        }
    }
    static async deleteVoucherController(req, res) {
        const { id } = req.body;
        try {
          const deletion = await Vouchers.deleteAccount(id);
          res.json({ message: "deleted" });
        } catch (err) {
          res.json({ message: err });
        }
    }
    static async getVoucher(req,res) {
        try {
          const update = await Vouchers.searchById(req.id);
          VoucherController.voucher = update;
          res.json({message: "data received"});
        } catch(err) {
            res.json({ message: err });
        }
    }
    static async updateVoucherPage(req, res) {
        try{
          res.render('UpdateVoucher', {title: 'Update Voucher', voucher: VoucherController.voucher})
        } catch(err) {
          res.json({ message: err });
        }
    }
    static async updateVoucherData(req, res) {
        try {
          const response = await Vouchers.UpdateById(VoucherController.voucher.voucherId, req.body);
          res.redirect('/vouchers')
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: err.message });
        }
    }
    static createPage(req, res) {
      const id = uuid.v4();
        res.render('CreateVoucher', {title: 'Create Voucher', uuid: id})
    }
    static async createVoucher(req,res) {
      console.log(req.body)
        try {
          await Vouchers.create(req.body);
          res.redirect("/vouchers")
        }catch (err) {
          res.json({ message: err });
        }
    }
}

module.exports = VoucherController;