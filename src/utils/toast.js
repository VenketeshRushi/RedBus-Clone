const success = (msg) => {
  return toast.success(msg);
};

const error = (msg) => {
  return toast.error(msg);
};

const promise = (successmsg, errormsg, loadingmsg) => {
  return toast.promise(saveSettings(settings), {
    loading: { message: loadingmsg ? loadingmsg : "Filtering..." },
    success: <b>`${successmsg}`</b>,
    error: <b>`${errormsg}`</b>,
  });
};
