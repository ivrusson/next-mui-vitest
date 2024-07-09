import { Breadcrumbs, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          MUI
        </Link>
        <Link color="inherit" href="/material-ui/getting-started/installation/">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
