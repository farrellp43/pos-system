import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";

interface IQuickActionUangProps {}

const QuickActionUang = (props: IQuickActionUangProps) => {
  return (
    <Fragment>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 1, m: 1 }}>
        <Card sx={{ width: 200 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">1000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 200, mt: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">2000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 200, mt: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">5000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 200, mt: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">10,000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 200, mt: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">20,000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 200, mt: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">50,000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 200, mt: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5">100,000</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Fragment>
  );
};

export default QuickActionUang;
