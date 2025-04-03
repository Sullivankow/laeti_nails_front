import Cookies from "js-cookie";

// Stocke le token et le rôle avec une durée de 7 jours
export const setAuth = (token, role) => {
  Cookies.set("X-AUTH-TOKEN", token, { expires: 7 });
  Cookies.set("userRole", role, { expires: 7 });
};

// Récupère le token et le rôle
export const getAuth = () => ({
  token: Cookies.get("X-AUTH-TOKEN"),
  role: Cookies.get("userRole"),
});

// Supprime l'authentification (déconnexion)
export const logout = () => {
  Cookies.remove("X-AUTH-TOKEN");
  Cookies.remove("userRole");
};
