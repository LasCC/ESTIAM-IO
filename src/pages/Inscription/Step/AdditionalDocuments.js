import React from "react";
import { Grid, Box, Typography, Button, Divider, Container } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";

export default props => {
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
							height: "90%",
							backgroundColor: "#004080"
						}}
					>
						<Link to="/" style={{ textDecoration: "none" }}>
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
										Choisir un fichier
										<input type="file" style={{ display: "none" }} />
									</Button>
									<Button
										variant="outlined"
										component="label"
										style={{ marginRight: 15, color: "#004080" }}
									>
										Choisir un fichier
										<input type="file" style={{ display: "none" }} />
									</Button>
									<Button
										variant="outlined"
										component="label"
										style={{ color: "#004080" }}
									>
										Choisir un fichier
										<input type="file" style={{ display: "none" }} />
									</Button>
								</Grid>
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
											to="/voeux-formation/fin"
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
											to="/recapitulatif"
											style={{ textDecoration: "none" }}
										>
											<Button
												variant="contained"
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
