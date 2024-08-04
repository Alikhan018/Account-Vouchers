class VoucherHandler {
  //constructor to enable click events for when instance of account handler is created
  constructor() {
    this.voucher = null;
    this.updateClick();
    this.delete();
  }
  //fetching id and sending it to update endpoint
  updateClick() {
    //binding update button
    const updatevoucher = document.getElementsByClassName("update");
    for (let i = 0; i < updatevoucher.length; i++) {
      updatevoucher[i].addEventListener("click", async (e) => {
        //.table-row has id which is voucher-id
        const tuple = e.target.closest(".table-row");
        const tupleId = tuple.getAttribute("id");
        //sending id to get desired account
        await fetch(`/vouchers/getvoucher`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: tupleId }),
        })
          .then(async (res) => {
            const response = await res.json();
            //if data is found for respective id voucher edit page will render
            if (response.message === "data received") {
              window.location.href = `/vouchers/edit`;
            } else {
              this.voucher = null;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }
  //fetching id and sending it to delete endpoint
  delete() {
    //binding delete button
    const deletevoucher = document.getElementsByClassName("delete");
    for (let i = 0; i < deletevoucher.length; i++) {
      deletevoucher[i].addEventListener("click", async (e) => {
        //.table-row has id which is voucher code 
        const tuple = e.target.closest(".table-row");
        const tupleId = tuple.getAttribute("id");
        console.log(tupleId);
        //htting delete endpoint
        await fetch(`/vouchers/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: tupleId }),
        }).then((res) => {
          //reloading page so user can the changes 
          location.reload();
          console.log("End point hit", res);
        });
      });
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new VoucherHandler();
});
