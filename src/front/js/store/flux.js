const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      name: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getPrivate: async (token) => {
        const opts = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        const resp = await fetch(
          process.env.BACKEND_URL +
            "/api/private?email=" +
            "test@test" +
            "&password=" +
            "test",
          opts
        ).then(() => setStore({ name: JSON.stringify(resp) }));
        return true;
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      
      login: async (email, password) => {
        try {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Corrected the typo
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          };
          const resp = await fetch(
            "https://cautious-engine-pjgjp99w754g377j-3001.app.github.dev/api/token",
            opts
          );
          if (resp.status != 200) {
            alert("There has been some error");
            return false;
          }
          else{
          const data = await resp.json();
          console.log("From the backend)", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;}// Handle the response data
        } catch (error) {
          console.error("There was an error!", error);
        }
      },

      syncTokenFromSessionStore: () => {
          const token  = sessionStorage.getItem("token");
          console.log("Application just loaded, syncing session storage token")
          if(token && token !="" && token != undefined) setStore({ token: token });
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Logging out")
        setStore({ token: null });
        
    },
    },
  };
};

export default getState;
