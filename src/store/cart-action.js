import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
  
      dispatch(
        uiActions.showNotifiction({
          open: true,
          type: "warning",
          message: "Sending Request to the Server",
        })
      );
      const sendRequest = async () => {
        // warning: request is sending
        const res = await fetch(
          "https://redux-shop-98350-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        const data = await res.json();
        // success: request is completed
        dispatch(
          uiActions.showNotifiction({
            open: true,
            type: "success",
            message: "Request Completed!",
          })
        );
      };
      try {
        await sendRequest();
      } catch (err) {
        dispatch(
          uiActions.showNotifiction({
            open: true,
            type: "error",
            message: "Unable to sent request",
          })
        );
      }
    };
  };