"use client";
import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";

// import fs from "fs";

export default function ProfileForm() {
  function handleFileChange(event: any) {}
  // (e) =>

  // 	});
  function handleTextReplacement(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {}

  return (
    <section id="ProfileForm" className="grid gap-5">
      <Button component="label" variant="contained" className="max-w-[200px]">
        upload a file
        <input
          type="file"
          className="hidden "
          accept="text/html"
          onChange={handleFileChange}
        />
      </Button>

      <div className="flex flex-grow">
        <TextField
          fullWidth
          id="first-name"
          name="first-name"
          label="First Name"
          variant="standard"
          placeholder="David "
          onChange={handleTextReplacement}
        />
        <TextField
          fullWidth
          id="second-name"
          name="second-name"
          label="Second Name"
          variant="standard"
          placeholder="Genaro"
          onChange={handleTextReplacement}
        />
        <TextField
          fullWidth
          id="middle-name"
          name="middle-name"
          label="Middle Name"
          variant="standard"
          placeholder="Chirino"
          onChange={handleTextReplacement}
        />
        <TextField
          fullWidth
          id="surname"
          name="surname"
          label="Surname"
          variant="standard"
          placeholder="Chirinos"
          onChange={handleTextReplacement}
        />
      </div>

      <TextField
        id="phone-number"
        name="phone-number"
        label="Phone Number"
        variant="standard"
        placeholder="+12 345 678 9101"
        onChange={handleTextReplacement}
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        variant="standard"
        type="email"
        placeholder="thisis@anexample.com"
        onChange={handleTextReplacement}
      />

      <TextField
        id="location"
        name="location"
        label="Location"
        variant="standard"
        placeholder="Coro, Falcón"
        onChange={handleTextReplacement}
      />

      <TextField
        id="portfolio-link"
        name="portfolio-link"
        label="Link"
        variant="standard"
        placeholder="www.portfolio.com"
        onChange={handleTextReplacement}
      />
    </section>
  );
}
