import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Snackbar,
  IconButton,
  Container,
  FormHelperText,
  Divider
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

export default props => {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [values, setValues] = React.useState({
    adresse_mail: ""
  });
  //console.log(values);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Box css={{ height: "90vh" }}>
        <Grid container spacing={0}>
          <Grid lg={4} md={4} sm={12}>
            <Box
              display={{
                xs: "none",
                sm: "none",
                lg: "block",
                md: "block",
                xl: "block"
              }}
              alignItems="flex-end"
              style={{
                backgroundImage: `url(https://i.imgur.com/X23g8Mh.png)`,
                backgroundPosition: "center",
                padding: 35
              }}
              css={{ height: "70vh", display: "flex" }}
            >
              <Box
                display="flex"
                alignItems="center"
                style={{ marginBottom: 15 }}
              >
                <ChatBubbleOutlineIcon
                  style={{
                    color: "white",
                    height: 35,
                    width: 35,
                    marginRight: 10
                  }}
                />
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  Le saviez-vous ?
                </Typography>
              </Box>
              <Typography variant="subtitle2" style={{ color: "white" }}>
                Tous professionnels des technologies de l’information, ils
                viennent à Éstiam pour partager avec nos étudiants leur
                expérience et les bonnes pratiques en entreprise.
              </Typography>
            </Box>
          </Grid>
          <Grid lg={8} md={8} sm={12}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 35
              }}
              css={{ height: "70vh" }}
            >
              <Typography
                variant="h3"
                style={{ fontWeight: "bold", color: "rgb(0, 64, 128)" }}
              >
                <RotateLeftIcon
                  className="iconregister"
                  style={{ marginRight: 10 }}
                />
                Réinitialisation mot de passe
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginTop: 10, color: "#02B875" }}
              >
                Un code de réinitialisation vous a été envoyé dans votre boîte
                de réception.
              </Typography>
              <Divider style={{ marginTop: 15, marginBottom: 15 }} />
              <Button
                variant="outlined"
                onClick={handleClick}
                fullWidth
                style={{
                  marginTop: 10,
                  color: "#004080",
                  borderColor: "#004080"
                }}
              >
                Renvoyer le code de réinitialisation
              </Button>
              <FormHelperText>
                Entrez ci-dessous <strong>l'adresse email</strong> avec laquelle
                vous avez créé votre compte
                <br /> Nous vous rappelons que les connexions au site
                s'effectuent avec votre <strong>adresse email</strong> et non
                avec votre <strong>nom</strong>
              </FormHelperText>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={
                  <span id="message-id">
                    <Box display="flex" alignContent="center">
                      <DoneIcon />
                      <Typography
                        variant="subtitle2"
                        style={{ marginLeft: 10 }}
                      >
                        Code envoyé
                      </Typography>
                    </Box>
                  </span>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
              <div className="fade-in-fwd">
                <TextField
                  variant="outlined"
                  label="Adresse email"
                  onChange={handleChange("adresse_mail")}
                  fullWidth
                  required
                  type="mail"
                  style={{ marginTop: 20 }}
                />

                <div style={{ marginTop: 20 }}>
                  <Link to="/connexion" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      style={{
                        marginRight: 15,
                        color: "#004080"
                      }}
                    >
                      Retour
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "#004080"
                    }}
                  >
                    Réinitialiser
                  </Button>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

// BACKUP
// <Container maxWidth="lg">
//   <NavBar />
//   <Grid container spacing={0}>
//     <Grid item lg={3} md={3}>
//       <Box
//         display={{
//           xs: "none",
//           md: "block",
//           lg: "block"
//         }}
//         style={{
//           padding: 25,
//           backgroundImage: `url(https://i.imgur.com/QkcUqNT.png)`,
//           backgroundPosition: "right",
//           height: "70vh",
//           backgroundColor: "white"
//         }}
//       >
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <Button style={{ color: "white" }}>
//             <ArrowBackIosIcon />
//             Accueil
//           </Button>
//         </Link>
//       </Box>
//     </Grid>
//     <Grid item xs lg={9} md={9}>
//       <Box
//         display="flex"
//         alignItems="center"
//         css={{ height: "70vh", marginTop: 25 }}
//       >
//         <Box
//           style={{
//             padding: 25,
//             backgroundColor: "white",
//             width: "100%",
//             height: "100%"
//           }}
//         >
//           <Typography
//             variant="h4"
//             style={{
//               color: "#004080",
//               fontWeight: "bold",
//               marginBottom: 15
//             }}
//           >
//             Réinitialisation de mot de passe
//           </Typography>
//           <Typography style={{ color: "#02B875", fontWeight: "bold" }}>
//             Un code de réinitialisation vous a été envoyé dans votre boîte
//             de réception
//           </Typography>
//           <Button
//             variant="outlined"
//             fullWidth
//             onClick={handleClick}
//             style={{ color: "#004080", marginTop: 10 }}
//           >
//             Renvoyer le code de réinitialisation
//           </Button>
//           <Snackbar
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left"
//             }}
//             open={open}
//             autoHideDuration={4000}
//             onClose={handleClose}
//             ContentProps={{
//               "aria-describedby": "message-id"
//             }}
//             message={
//               <span id="message-id">
//                 <Box display="flex" alignContent="center">
//                   <DoneIcon />
//                   <Typography
//                     variant="subtitle2"
//                     style={{ marginLeft: 10 }}
//                   >
//                     Email de réinitialisation envoyé
//                   </Typography>
//                 </Box>
//               </span>
//             }
//             action={[
//               <IconButton
//                 key="close"
//                 aria-label="close"
//                 color="inherit"
//                 onClick={handleClose}
//               >
//                 <CloseIcon />
//               </IconButton>
//             ]}
//           />
//           <div className="fade-in-fwd">
//             <FormHelperText>
//               Entrez ci-dessous <strong>l'adresse email</strong> avec
//               laquelle vous avez créé votre compte
//               <br /> Nous vous rappelons que les connexions au site
//               s'effectuent avec votre <strong>adresse email</strong> et non
//               avec votre <strong>nom</strong>
//             </FormHelperText>
//             <TextField
//               variant="outlined"
//               label="Adresse email"
//               onChange={handleChange("adresse_mail")}
//               fullWidth
//               required
//               type="mail"
//               style={{ marginTop: 20 }}
//             />

//             <div style={{ marginTop: 20 }}>
//               <Link to="/connexion" style={{ textDecoration: "none" }}>
//                 <Button
//                   variant="outlined"
//                   style={{
//                     marginRight: 15,
//                     color: "#004080"
//                   }}
//                 >
//                   Retour
//                 </Button>
//               </Link>
//               <Button
//                 variant="contained"
//                 style={{
//                   color: "white",
//                   backgroundColor: "#004080"
//                 }}
//               >
//                 Réinitialiser
//               </Button>
//             </div>
//           </div>
//         </Box>
//       </Box>
//     </Grid>
//   </Grid>
// </Container>
