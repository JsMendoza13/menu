export default {
  profile: {
    name: "Marco Rivas",
    image: "profile.png",
    onClick() {
      console.log("Hola");
    },
  },

  items: [
    {
      id: 0,
      title: "Home",
      icon: "fa-house-user",
      onClick() {
        console.log("Home");
      },
    },
    {
      id: 1,
      title: "Report",
      icon: "fa-screwdriver-wrench",
      onClick() {
        console.log("Report");
      },
    },
    {
      id: 2,
      title: "About",
      icon: "fa-fire",
      onClick() {
        console.log("About");
      },
    },
  ],
};
