const authenticate = (context: any, complete: any, modules: any) => {
    // authenticate the user here
    // if (err) {
    //   return complete().accessDenied(err).next();
    // }
    let token = { myAuthToken: "ffds9afdsafdsaf89ds0fds90f8ds-=" };
    return complete().setToken(token).ok().next();
  }

  export default {
    authenticate,
  };