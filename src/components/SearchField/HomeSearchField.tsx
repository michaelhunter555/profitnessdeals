"use client";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const HomeSearchField = () => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const sendUserQuery = async () => {
    if (query.length > 0) {
      //do something
    }
    setQuery("");
  };

  return (
    <Stack direction="row" alignItems="center" width="50%" spacing={2}>
      <TextField
        sx={{
          "& .css-8j6b76-MuiInputBase-root-MuiOutlinedInput-root": {
            borderRadius: "40px",
          },
        }}
        onChange={handleQuery}
        value={query}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Chip
        onClick={sendUserQuery}
        size="medium"
        disabled={query.length === 0}
        component="button"
        clickable
        label="Search"
        variant="outlined"
      />
    </Stack>
  );
};

export default HomeSearchField;
