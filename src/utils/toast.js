export const successToast = (msg) => {
  return toast.success(msg);
};

export const errorToast = (msg) => {
  return toast.error(msg);
};

export const promiseToast = (successmsg, errormsg, loadingmsg) => {
  return toast.promise(saveSettings(settings), {
    loading: { message: loadingmsg ? loadingmsg : "Filtering..." },
    success: `<b>${successmsg}</b>`,
    error: `<b>${errormsg}</b>`,
  });
};
