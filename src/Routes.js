const routes = {
  HOME: "/",
  LOGIN: "/connexion",
  REGISTER: "/inscription",
  MAILCONFIRMATION: "/confirmation",
  USER_RESET: "/reinitialisation-identifiant",
  PASSWORD_RESET: "/reinitialisation-mot-de-passe",
  GENERAL_INFO: "/renseignement",
  PERSONAL_INFO: "/renseignement/informations-personnelles",
  END_INFO: "/renseignement/fin",
  RECAPITULATION: "/recapitulatif",
  DASHBOARD: "/dashboard",
  DASHBOARD_TASKS: "/dashboard/taches", // !  :  /taches
  DASHBOARD_RESULTS: "/dashboard/resulats", // ! current : resultats
  DASHBOARD_HELP: "/dashboard/aide", // ! current : aide
  ADMIN: "/administration",
  WISHES_END: "/voeux-formation",
  UPLOAD_FILE: "/pieces-complementaires",
  ADMIN_ANALYTICS: "/administration/analytics",
  WISHES_CAMPUS: "/voeux-formation/campus",
  WISHES_FORMATION: "/voeux-formation",
  CURRENT_SITUATION: "/situation-actuelle",
  CURRENT_SITUATION_PREV_SCHOOL: "/situation-actuelle/etablissement",
  CURRENT_SITUATION_END: "/situation-actuelle/fin"
};

export default routes;
