import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "../../GlobalStyle";


export default function BasicBreadcrumbs({ category, link, title }) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          home
        </Link>
        <Link underline="hover" color="inherit" to={link? link : ""}>
          {category ? category : ""}
        </Link>
        {title && (
          <Typography color="text.primary">
            {title ? title.slice(0, 75) + "..." : ""}
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
}
