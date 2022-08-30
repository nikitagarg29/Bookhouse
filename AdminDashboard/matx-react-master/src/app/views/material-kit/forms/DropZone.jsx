import { blue } from "@mui/material/colors";
import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ open }) {

  const { getRootProps, getInputProps } = useDropzone({});
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div style={{color: 'grey', lineHeight : 10, padding: 20, borderWidth:1, borderStyle: 'dashed', borderColor:'blue', textAlign: 'center'}}>
        <p className="dropzone-content">
          Drop product images
        </p>
      </div>
    </div>
  );
}
export default Dropzone;