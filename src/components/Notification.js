import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function Notification({ type, message }) {
  const notify = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  function closeHandler() {
    dispatch(uiActions.showNotifiction({open: false}))
  }

  console.log(notify);

  return <div>{notify && <Alert onClose={closeHandler} severity={type}>{message}</Alert>}</div>;
}
