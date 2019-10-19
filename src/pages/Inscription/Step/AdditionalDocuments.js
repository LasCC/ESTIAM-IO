import React, { useState, useEffect, useContext } from "react";
import http from "../../../services/httpService";
import { Candidature } from "../../../contexts/CandidatureContext";
import { LoginContext } from "../../../contexts/LoginContext";
import {
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  Container,
  IconButton
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import Routes from "../../../Routes";

export default props => {
  const [bulletins, setBulletins] = useState([]);
  const [bulletinsname, setBulletinsname] = useState([]);
  // =============TODO
  const [cv, setCv] = useState(null);
  const [cvname, setCvName] = useState("");

  const [lettremv, setLettremv] = useState(null);
  const [lettremvname, setLettremvName] = useState("");

  const [photo, setPhoto] = useState(null);
  const [photoname, setPhotoName] = useState(null);

  const [cni, setCni] = useState(null);
  const [cniname, setCniName] = useState("");

  const [diplome, setDiplome] = useState(null);
  const [diplomename, setDiplomeName] = useState("");

  const [filesent, setFilesent] = useState(false);
  // ===========
  const { endpoint } = useContext(LoginContext);
  console.log(endpoint);
  const onChangeBulletinInput = evt => {
    try {
      console.log(evt.target.files[0].name);
      setBulletins([...bulletins, evt.target.files[0]]);
      setBulletinsname([...bulletinsname, evt.target.files[0].name]);
      console.log(bulletins, bulletinsname);
    } catch (ex) {
      console.log(ex);
    }
  };
  const onChangeCVinput = evt => {
    console.log(evt.target.files[0].name);
    try {
      setCv(evt.target.files[0]);
      setCvName(evt.target.files[0].name);
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleremoveFile = evt => {
    const filename =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].children[0]
        .innerText;
    const index = bulletins.map(file => file.name).indexOf(filename);
    setBulletins(prevFiles =>
      prevFiles.filter(files => files.name !== filename)
    );
    setBulletinsname(prevFilenames =>
      prevFilenames.filter(names => names !== filename)
    );
    console.log(index, filename);
  };
  const singleRemove = evt => {
    setCv();
    setCvName("");
  };
  const onSubmit = evt => {
    evt.preventDefault();
    console.log("actual files in state:", bulletins);
    const formData = new FormData();
    for (const file of bulletins) {
      console.log("loop file :", file);
      formData.append("bulletins", file);
    }
    //2eme loop ici pour cv et les autres ...
    formData.append("cv", cv);

    console.log("actual formdata after looped", formData, formData.length);
    http
      .post(endpoint + `/api/candidature/sendfile`, formData, {
        headers: {
          "Content-type": "multipart/formdata",
          "x-auth-token": localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log(res);
        setFilesent(true);
      });
  };

  return (
    <Container maxWidth="lg">
      <RegistedUserNav />
      <Grid container spacing={0}>
        <Grid item lg={3} md={3}>
          <Box
            display={{
              xs: "none",
              md: "block",
              lg: "block"
            }}
            style={{
              padding: 25,
              backgroundImage: `url(https://i.imgur.com/7x6wfMR.png)`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              height: "90%",
              backgroundColor: "white"
            }}
          >
            <Link to={Routes.HOME} style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>
                <ArrowBackIosIcon />
                Accueil
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs lg={9} md={9}>
          <Box
            display="flex"
            alignItems="center"
            css={{ height: "90%", marginTop: 25 }}
          >
            <Box
              style={{
                padding: 25,
                backgroundColor: "white",
                width: "100%",
                height: "100%"
              }}
            >
              <div className="fade-in-fwd">
                <Typography
                  variant="h4"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginBottom: 15
                  }}
                >
                  Pièces complémentaires
                </Typography>
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  style={{ marginTop: 25, marginBottom: 15 }}
                >
                  <strong>Formats autorisés :</strong> <br />
                  JPG, PDF, PNG (les CV et lettre de motivation peuvent aussi
                  être au format Word).
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                    marginTop: 25,
                    marginBottom: 15
                  }}
                >
                  Vos trois derniers bulletins de notes
                </Typography>
                <Grid>
                  <Button
                    variant="outlined"
                    component="label"
                    style={{ color: "#004080", marginRight: 15 }}
                  >
                    Parcourir ...
                    <input
                      accept=".pdf,.jpg,.png"
                      name="bulletin"
                      type="file"
                      style={{ display: "none" }}
                      onChange={onChangeBulletinInput}
                    />
                  </Button>
                </Grid>
                <div
                  style={{
                    display: !bulletinsname.length ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  {bulletinsname.map(name => (
                    <Box display="flex" alignItems="center">
                      <IconButton
                        onClick={handleremoveFile}
                        style={{ marginRight: 10 }}
                      >
                        <ClearIcon />
                      </IconButton>
                      <Typography variant="caption" color="textSecondary">
                        <span>{name}</span>
                      </Typography>
                    </Box>
                  ))}
                </div>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                    marginTop: 25,
                    marginBottom: 15
                  }}
                >
                  Votre pièce d'identité (passeport, CNI)
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input
                    type="file"
                    name="cni"
                    onChange={onChangeCVinput}
                    style={{ display: "none" }}
                  />
                </Button>

                <div
                  style={{
                    display: !cvname ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={singleRemove}
                      style={{ marginRight: 10 }}
                    >
                      <ClearIcon />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      <span>{cvname}</span>
                    </Typography>
                  </Box>
                </div>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                    marginTop: 25,
                    marginBottom: 15
                  }}
                >
                  Votre CV
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input type="file" style={{ display: "none" }} />
                </Button>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                    marginTop: 25,
                    marginBottom: 15
                  }}
                >
                  Votre lettre de motivation
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input type="file" style={{ display: "none" }} />
                </Button>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                    marginTop: 25,
                    marginBottom: 15
                  }}
                >
                  Votre photo d'identité
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input type="file" style={{ display: "none" }} />
                </Button>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                    marginTop: 25,
                    marginBottom: 15
                  }}
                >
                  Photocopie de votre dernier diplôme
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input type="file" style={{ display: "none" }} />
                </Button>
                <Box display="flex" style={{ marginTop: 15 }}>
                  <Box flexGrow={1}>
                    <Link
                      to={Routes.WISHES_END}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        type="submit"
                        component="label"
                        style={{ color: "#004080" }}
                      >
                        Retour
                      </Button>
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to={Routes.RECAPITULATION}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        onClick={onSubmit}
                        type="submit"
                        component="label"
                        style={{ color: "white", backgroundColor: "#004080" }}
                      >
                        Envoyer
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
