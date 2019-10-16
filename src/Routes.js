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
  DASHBOARD_HELP: "/dashboard/aide", // ! current : aide
  WISHES_END: "/voeux-formation/fin", // incorrect route !
  UPLOAD_FILE: "/pieces-complementaires",
  ADMIN_DASHBOARD_LOGIN: "/connexion/administration",
  ADMIN_DASHBOARD_FORGOT_PASSWORD: "/mot-de-passe-oublie/administration",
  ADMIN_DASHBOARD: "/administration",
  ADMIN_DASHBOARD_FILES: "/administration/dossiers",
  ADMIN_DASHBOARD_GLOBALVISION: "/administration/vue-ensemble",
  WISHES_CAMPUS: "/voeux-formation/campus",
  WISHES_FORMATION: "/voeux-formation",
  CURRENT_SITUATION: "/situation-actuelle",
  CURRENT_SITUATION_PREV_SCHOOL: "/situation-actuelle/etablissement",
  CURRENT_SITUATION_END: "/situation-actuelle/fin",
  PARAMETER_NOTIFICATION: "/parametre-notification"
};

export default routes;
