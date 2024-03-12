import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "inscription", "/pages/auth/signup.html"),
  new Route("/account", "mon compte", "/pages/auth/account.html"),
  new Route("/editPassword", "inscription", "/pages/auth/editPassword.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
