"use client";
import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/dataContext";
import { updateObject } from "../../Utils/Utils";
import { TemplateContext } from "../../contexts/templateContext";

export default function ProfileForm() {
  const { data, setData } = useContext(DataContext);
  const { setSelectedTemplate } = useContext(TemplateContext);

  const personal_info = data.personal_information;

  useEffect(
    () => {
      console.log(data);

      return () => {};
    },
    //eslint-disable-next-line
    []
  );

  function handleFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedTemplate(event.target?.result as string);
    };

    reader.readAsText(file);
  }

  function handleTextReplacement(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData(
      updateObject(
        data,
        `personal_information.${e.target.name}`,
        e.target.value
      )
    );
  }

  return (
    <section id="ProfileForm" className="grid gap-5">
      <Button component="label" variant="contained" className="w-[100%]">
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
          id="first_name"
          name="first_name"
          label="First Name"
          variant="standard"
          defaultValue={personal_info.first_name}
          placeholder="David "
          onChange={handleTextReplacement}
        />
        <TextField
          fullWidth
          id="second_name"
          name="second_name"
          label="Second Name"
          variant="standard"
          defaultValue={personal_info.second_name}
          placeholder="Genaro"
          onChange={handleTextReplacement}
        />
        <TextField
          fullWidth
          id="middle_name"
          name="middle_name"
          label="Middle Name"
          variant="standard"
          defaultValue={personal_info.middle_name}
          placeholder="Chirino"
          onChange={handleTextReplacement}
        />
        <TextField
          fullWidth
          id="surname"
          name="surname"
          label="Surname"
          variant="standard"
          defaultValue={personal_info.surname}
          placeholder="Chirinos"
          onChange={handleTextReplacement}
        />
      </div>
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
        id="phone_number"
        name="phone_number"
        label="Phone Number"
        variant="standard"
        placeholder="+12 345 678 9101"
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
        id="portfolio_link"
        name="portfolio_link"
        label="Link"
        variant="standard"
        placeholder="www.portfolio.com"
        onChange={handleTextReplacement}
      />
    </section>
  );
}
