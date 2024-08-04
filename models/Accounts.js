const AccountModel = require('./AccountsModel');
class Account {
  constructor() {}
  
  //model function for creating account
  static async create(account) {
    try {
      const res = await AccountModel.create({
        accountId: account.accountId,
        accountTitle: account.accountTitle,
        accountType: account.accountType,
      })
      return "Added";
    } catch(err) {
      console.log(err)
      throw err;
    }
  }

  //model function for viewing all account
  static async viewAccounts() {
    try {
      const accounts = await AccountModel.findAll({raw: true});
      return accounts;
    } catch (err) {
      throw err;
    }
  }

  //model function for searching account by id
  static async searchById(id) {
    try {
      const account = await AccountModel.findOne({accountId: id}, {
        raw: true
      })
      return account;
    } catch (err) {
      throw err;
    }
  }

  //model function for deleting account by id
  static async deleteAccount(id) {
    try {
      await AccountModel.destroy({where: {
        accountId: id
      }});
      return "Deleted";
    } catch (err) {
      throw err;
    }
  }

  //model function for updating account by id
  static async UpdateById(id, account) {
    try {
      console.log(id, account)
      await AccountModel.update({
        accountTitle: account.accountTitle,
        accountType: account.accountType,
      }, {where : {
        accountId: id
      }})
      return "Updated";
    } catch (err) {
      throw err;
    }
  }
}
module.exports = Account;
