import React, { useState } from "react";
export function NameForm(props) {
  return (
    <div>
      <label>
        Name:
        <input type="text" />
      </label>
      <input type="submit" value="Submit" />
    </div>
  );
}