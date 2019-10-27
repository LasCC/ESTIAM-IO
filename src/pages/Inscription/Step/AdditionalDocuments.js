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
  const [cni, setCni] = useState(null);
  const [cniname, setCniName] = useState("");
  const [cv, setCv] = useState(null);
  const [cvname, setCvName] = useState("");
  const [lettremv, setLettremv] = useState(null);
  const [lettremvname, setLettremvName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoname, setPhotoName] = useState(null);
  const [diplome, setDiplome] = useState(null);
  const [diplomename, setDiplomeName] = useState("");

  const [filesent, setFilesent] = useState(false);
  const { updateDossier } = useContext(Candidature);
  const { endpoint } = useContext(LoginContext);

  const onChangeBulletinInput = evt => {
    try {
      console.log(evt.target.files[0].name);
      if (bulletins.length > 3) return;
      setBulletins([...bulletins, evt.target.files[0]]);
      setBulletinsname([...bulletinsname, evt.target.files[0].name]);
      console.log(bulletins, bulletinsname);
    } catch (ex) {
      console.log(ex);
    }
  };
  const onChangePieceIdentiteinput = evt => {
    console.log(evt.target.files[0].name);
    try {
      setCni(evt.target.files[0]);
      setCniName(evt.target.files[0].name);
    } catch (ex) {
      console.log(ex);
    }
  };
  const onChangeDiplomeinput = evt => {
    console.log(evt.target.files[0].name);
    try {
      setDiplome(evt.target.files[0]);
      setDiplomeName(evt.target.files[0].name);
    } catch (ex) {
      console.log(ex);
    }
  };
  const onChangePhotoinput = evt => {
    console.log(evt.target.files[0].name);
    try {
      setPhoto(evt.target.files[0]);
      setPhotoName(evt.target.files[0].name);
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
  const onChangeLettreMVinput = evt => {
    console.log(evt.target.files[0].name);
    try {
      setLettremv(evt.target.files[0]);
      setLettremvName(evt.target.files[0].name);
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
  const CniRemove = evt => {
    const filename =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].children[0]
        .innerText;
    setCni();
    setCniName("");
    console.log(filename);
  };
  const LettreMvRemove = evt => {
    const filename =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].children[0]
        .innerText;
    setLettremv();
    setLettremvName("");
    console.log(filename);
  };
  const PhotoRemove = evt => {
    const filename =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].children[0]
        .innerText;
    setPhoto();
    setPhotoName("");
    console.log(filename);
  };
  const DiplomeRemove = evt => {
    const filename =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].children[0]
        .innerText;
    setDiplome();
    setDiplomeName("");
    console.log(filename);
  };
  const CvRemove = evt => {
    const filename =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].children[0]
        .innerText;
    setCv();
    setCvName("");
    console.log(filename);
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
    formData.append("cni", cni);
    formData.append("cv", cv);
    formData.append("lettre_motivation", lettremv);
    formData.append("photo", photo);
    formData.append("diplome", diplome);

    console.log("actual formdata after looped", formData, formData.length);
    http
      .post(endpoint + `/api/candidature/sendfile`, formData, {
        headers: {
          "Content-type": "multipart/formdata",
          "x-auth-token": localStorage.getItem("token")
        },
        onUploadProgress: progressEvent =>
          console.log(
            Math.round(progressEvent.loaded / progressEvent.total) * 100
          )
      })
      .then(res => {
        console.log(res);
        setFilesent(true);
        let dossier = JSON.parse(localStorage.getItem("dossier"));
        dossier.step[3].done = true;
        localStorage.setItem("dossier", JSON.stringify(dossier));
        updateDossier(
          { candidat: dossier.candidat, step: dossier.step },
          Routes.DASHBOARD
        );
        console.log(dossier);
      })
      .catch(ex => console.log(ex));
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
              height: "95%",
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
            css={{ height: "95%", marginTop: 25 }}
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
                    onChange={onChangePieceIdentiteinput}
                    style={{ display: "none" }}
                  />
                </Button>
                <div
                  style={{
                    display: !cniname ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={CniRemove} style={{ marginRight: 10 }}>
                      <ClearIcon />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      <span>{cniname}</span>
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
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={onChangeCVinput}
                  />
                </Button>
                <div
                  style={{
                    display: !cvname ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={CvRemove} style={{ marginRight: 10 }}>
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
                  Votre lettre de motivation
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={onChangeLettreMVinput}
                  />
                </Button>
                <div
                  style={{
                    display: !lettremvname ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={LettreMvRemove}
                      style={{ marginRight: 10 }}
                    >
                      <ClearIcon />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      <span>{lettremvname}</span>
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
                  Votre photo d'identité
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={onChangePhotoinput}
                  />
                </Button>
                <div
                  style={{
                    display: !photoname ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={PhotoRemove}
                      style={{ marginRight: 10 }}
                    >
                      <ClearIcon />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      <span>{photoname}</span>
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
                  Photocopie de votre dernier diplôme
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  style={{ color: "#004080" }}
                >
                  Choisir un fichier
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={onChangeDiplomeinput}
                  />
                </Button>
                <div
                  style={{
                    display: !diplomename ? "none" : "block",
                    marginTop: 5
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={DiplomeRemove}
                      style={{ marginRight: 10 }}
                    >
                      <ClearIcon />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      <span>{diplomename}</span>
                    </Typography>
                  </Box>
                </div>
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
                    <Button
                      variant="contained"
                      onClick={onSubmit}
                      type="submit"
                      component="label"
                      style={{ color: "white", backgroundColor: "#004080" }}
                    >
                      Envoyer
                    </Button>
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
