function ModalSuccess(){
    Swal.fire({
        title: "Good Job!",
        text: "Added to cart",
        icon: "success"
      });
}
function Cart(){

    Swal.fire({
        title: "Do you want to buy this?",
        text: "Click here to finish",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Bought",
            text: "Bought successfully.",
            icon: "success"
          });
        }
      });
}
