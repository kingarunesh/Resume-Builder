import { useState } from "react";
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Grid,
    Avatar,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    RadioGroup,
    Radio,
    FormLabel,
    FormControlLabel,
    FormGroup,
    Stack,
    Input,
    Button,
    Checkbox,
    Alert,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { styled } from "@mui/system";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(null);
    const [st, setSt] = useState("");
    const [gender, setGender] = useState();
    const [jobLocation, setJobLocation] = useState([]);
    const [profileImage, setProfileImage] = useState("");
    const [resume, setResume] = useState("");

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: "",
    });

    const resetForm = () => {
        setName("");
        setEmail("");
        setDob(null);
        setSt("");
        setGender("");
        setJobLocation([]);
        setProfileImage("");
        setResume("");
    };

    const handlerJobLocation = (e) => {
        let data = jobLocation;
        data.push(e.target.value);
        setJobLocation(data);
    };

    const Input = styled("input")({
        display: "none",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("name", "name");
        data.append("email", "email");
        data.append("dob", "dob");
        data.append("st", "st");
        data.append("gender", "gender");
        data.append("jobLocation", "jobLocation");
        data.append("profileImage", "profileImage");
        data.append("resume", "resume");

        if (name && email) {
            console.log(data.get("name"));
            console.log(data.get("email"));
            setError({ status: true, msg: "Resume uploaded successfully", type: "success" });
            resetForm();
            document.getElementById("resume-form").reset();
        } else {
            setError({ status: true, msg: "All fields are required", type: "error" });
        }
    };

    return (
        <>
            <Box display="flex" justifyContent="center" sx={{ backgroundColor: "error.light", padding: 2, mb: 1 }}>
                <Typography variant="h2" component="div" sx={{ fontWeight: "bold", color: "white" }}>
                    Resume Uploader
                </Typography>
            </Box>

            <Grid container justifyContent="center">
                <Grid item xs={5}>
                    <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
                        {/* INFO -> name*/}
                        <TextField
                            id="name"
                            name="name"
                            required
                            margin="normal"
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {/* INFO -> email*/}
                        <TextField
                            id="email"
                            name="email"
                            required
                            margin="normal"
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* INFO -> date */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date Of Birth"
                                value={dob}
                                onChange={(newValue) => {
                                    setDob(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        {/* INFO -> select sate*/}
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="state-select-label">State</InputLabel>
                            <Select labelId="state-select-label" id="select-state" value={st} onChange={(e) => setSt(e.target.value)}>
                                <MenuItem value="Delhi">Delhi</MenuItem>
                                <MenuItem value="Odisa">Odisa</MenuItem>
                                <MenuItem value="Karnataka">Karnataka</MenuItem>
                            </Select>
                        </FormControl>

                        {/* INFO -> gender*/}
                        <FormControl margin="normal" fullWidth>
                            <FormLabel id="gender-radio">Gender</FormLabel>
                            <RadioGroup row name="gender">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label="Other"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </RadioGroup>
                        </FormControl>

                        {/* INFO ->     job location    */}
                        <FormControl component="fieldset" fullWidth margin="normal">
                            <FormLabel component="legend">Job Location</FormLabel>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    onChange={(e) => handlerJobLocation(e)}
                                    label="Delhi"
                                    value="Delhi"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    onChange={(e) => handlerJobLocation(e)}
                                    label="Gurugram"
                                    value="Gurugram"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    onChange={(e) => handlerJobLocation(e)}
                                    label="Noida"
                                    value="Noida"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    onChange={(e) => handlerJobLocation(e)}
                                    label="Bangalore"
                                    value="Bangalore"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    onChange={(e) => handlerJobLocation(e)}
                                    label="Mumbai"
                                    value="Mumbai"
                                />
                            </FormGroup>
                        </FormControl>

                        {/* INFO ->     image & file    */}
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <label htmlFor="profile-photo">
                                <Input
                                    accept="image/*"
                                    id="profile-photo"
                                    type="file"
                                    onChange={(e) => setProfileImage(e.target.files[0])}
                                />
                                <Button variant="contained" component="span">
                                    Upload Photo
                                </Button>
                            </label>

                            <label htmlFor="resume-file">
                                <Input accept="doc/*" id="resume-file" type="file" onChange={(e) => setResume(e.target.files[0])} />
                                <Button variant="contained" component="span">
                                    Upload File
                                </Button>
                            </label>
                        </Stack>

                        {/* INFO ->     submit   */}
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }} color="error">
                            Submit
                        </Button>

                        {/* INFO ->     error message   */}
                        {error.status && <Alert severity={error.type}>{error.msg}</Alert>}
                    </Box>
                </Grid>

                {/* 
                INFO -> table grid  
                */}
                <Grid item xs={7}>
                    <Box display="flex" justifyContent="center" sx={{ backgroundColor: "info.light", padding: 1 }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "white" }}>
                            List of Condidates
                        </Typography>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">DOB</TableCell>
                                    <TableCell align="center">State</TableCell>
                                    <TableCell align="center">Gender</TableCell>
                                    <TableCell align="center">Location</TableCell>
                                    <TableCell align="center">Avatar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell align="center">Arunesh kumar</TableCell>
                                    <TableCell align="center">arunesh@gmail.com</TableCell>
                                    <TableCell align="center">20/07/1999</TableCell>
                                    <TableCell align="center">Bihar</TableCell>
                                    <TableCell align="center">Male</TableCell>
                                    <TableCell align="center">Bangalore, Delhi</TableCell>
                                    <TableCell align="center">
                                        <Avatar src="#" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
