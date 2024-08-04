class AccountsHandler {
  //constructor to enable click events for when instance of account handler is created
  constructor() {
    this.account = null;
    this.updateClick();
    this.delete();
  }
  //fetching id and sending it to update endpoint
  updateClick() {
    //binding update button
    const updateAccount = document.getElementsByClassName("update");
    for (let i = 0; i < updateAccount.length; i++) {
      updateAccount[i].addEventListener("click", async (e) => {
        //.table-row has id which is account-id
        const tuple = e.target.closest(".table-row");
        const tupleId = tuple.getAttribute("id");
        //sending id to get desired account
        await fetch(`/accounts/getAccount` , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: tupleId })
        }).then( async(res) => {
          const response = await res.json();
          //if data is found for respective id account edit page will render
          if (response.message === "data received") {
            window.location.href = `/accounts/edit`;
          }
          else {
            this.account = null;
          }
        }).catch((err) => {
          console.log(err)
        })
      });
    }
  }

  //fetching id and sending it to delete endpoint
  delete() {
    //binding delete button
    const deleteAccount = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteAccount.length; i++) {
      deleteAccount[i].addEventListener("click", async (e) => {
        //.table-row has id which is voucher code 
        const tuple = e.target.closest(".table-row");
        const tupleId = tuple.getAttribute("id");
        console.log(tupleId)
        //hitting the delete endpoint
        await fetch(`/accounts/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: tupleId })
        }).then(res => {
            //reloading page so user can the changes 
            location.reload();
        });
      });
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new AccountsHandler();
});
