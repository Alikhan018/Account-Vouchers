const VoucherModel = require('./VoucherModel');

class Vouchers {
    constructor() {}

    //model function for viewing all vouchers
    static async viewAll() {
        let vouchers = await VoucherModel.findAll({raw: true}); 
        return vouchers;
    }

    //model function for creating voucher
    static async create(voucher) {
      const date = new Date(voucher.VoucherDate)
        try {
          await VoucherModel.create({
            voucherId: voucher.voucherId,
            Memo: voucher.Memo,
            VoucherDate: date.toISOString(),
          })
          return "Added";
        } catch(err) {
          console.log(err)
          throw err;
        }
    }

    //model function for searching a voucher by id
    static async searchById(id) {
        try {
          const voucher = await VoucherModel.findOne({voucherId: id}, {
            raw: true
          })
          return voucher;
        } catch (err) {
          throw err;
        }
    }

    //model function for deleting voucher by id
    static async deleteAccount(id) {
        try {
          await VoucherModel.destroy({where: {
            voucherId: id
          }});
          return "Deleted";
        } catch (err) {
          throw err;
        }
    }

    //model function for updating voucher by id
    static async UpdateById(id, voucher) {
        try {
          await VoucherModel.update({
            Memo: voucher.voucherMemo,
            VoucherDate: voucher.voucherDate,
          }, {where : {
            voucherId: id
          }})
          return "Updated";
        } catch (err) {
          throw err;
        }
    }
}

module.exports = Vouchers;