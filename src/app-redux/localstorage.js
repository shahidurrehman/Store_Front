export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('aic-pm-auth-user');

    if (serializedState === null) {
      return undefined;
    }
    return {
      // animate: {
      //   toggleSidebar: false,
      // },
      auth: {
        status: "idle",
        data:
          JSON.parse(serializedState)
      },
      common: {
        status: "idle",
        data:{}
      },
      // data: {
      //   categories: {}
      // },
      // message: {}
    };

  } catch (err) {
    return undefined;
  }
};
