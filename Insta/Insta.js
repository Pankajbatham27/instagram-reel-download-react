import { useState } from "react";
import Button from "../Modules/buttonHover/Button";
import style from "./Insta.module.css";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { center } from "@cloudinary/url-gen/qualifiers/textAlignment";
import {
  DownloadForOffline,
  PlayCircleFilled,
  VideoFile,
} from "@mui/icons-material";

const Insta = () => {
  const [url, setUrl] = useState();
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  const [error, setError] = useState();

  const [loader, setLoader] = useState(false);

  const submitHandler = async () => {
    setLoader(true);
    try {
      const data = await fetch("http://localhost:3000/insta?url=" + url);
      const response = await data.json();

      if (response.status === true) {
        setVideo(response.data);
        setTitle(response.title);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <div className={style.formCover}>
      <div className={style.formInner}>
        <Paper>
          <Box width={500} pt={15} pb={15} textAlign={center}>
            <Typography variant="h4" mb={5}>
              Download Instagram Reel
            </Typography>
            <div className={style.inputElement}>
              <TextField
                id="outlined-basic"
                label="Instagram Reel URL"
                variant="outlined"
                fullWidth
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div>
              <Button
                text={"Submit"}
                loader={loader}
                submitHandler={submitHandler}
              />
            </div>

            {error && (
              <div style={{ marginTop: "10px" }}>
                <Typography variant="body2" color={"error"} component={"error"}>
                  {error}
                </Typography>
              </div>
            )}

            {video && (
              <Box
                boxShadow={"0px 7px 32px -6px #00000040"}
                m={2}
                mt={6}
                borderRadius={2}
                border={1}
              >
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="Play">
                      <a href={video}>
                        <PlayCircleFilled color={"primary"} />
                      </a>
                    </IconButton>
                  }
                >
                  {/* <ListItemText
                    primary={title}
                    style={{fontSize: '10px'}}
                  /> */}
                  <Typography variant="body2">{title}</Typography>
                </ListItem>
              </Box>
            )}
          </Box>
        </Paper>
      </div>
    </div>
  );
};
export default Insta;