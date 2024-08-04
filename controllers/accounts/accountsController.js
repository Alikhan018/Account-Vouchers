const Account = require("../../models/Accounts");
class AccountsController {
  constructor() {
    this.account = {};
  }
  static async viewAccountsController(req, res) {
    try {
      const accounts = await Account.viewAccounts();
      res.render("Accounts", { title: "Accounts", accounts: accounts });
    } catch (err) {
      console.log(err);
    }
  }
  static async deleteAccountsController(req, res) {
    const { id } = req.body;
    try {
      const deletion = await Account.deleteAccount(id);
      res.json({ message: "deleted" });
    } catch (err) {
      res.json({ message: err });
    }
  }
  static async getAccount(req,res) {
    try {
      const update = await Account.searchById(req.id);
      AccountsController.account = update;
      res.json({message: "data received"});
    } catch(err) {
        res.json({ message: err });
    }
  }
  static async updateAccountPage(req, res) {
    try{
      res.render('UpdateAccount', {title: 'Update Account', account: AccountsController.account})
    } catch(err) {
      res.json({ message: err });
    }
  }
  static async updateAccountData(req, res) {
    try {
      const response = await Account.UpdateById(AccountsController.account.accountId, req.body);
      res.redirect('/accounts')
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  }
  static createPage(req, res) {
    res.render('CreateAccount', {title: 'Create Account'})
  }
  static async createAccount(req,res) {
    try {
      if(req.body.accountType === undefined) {
        res.send(`Error`)
      }
      await Account.create(req.body);
      res.redirect("/accounts")
    }catch (err) {
      res.json({ message: err });
    }
  }
}
module.exports = AccountsController;
