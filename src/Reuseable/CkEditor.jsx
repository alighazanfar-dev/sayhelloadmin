import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImageUploadAdapter from "./ImageUploadAdapter";

const CkEditor = (props) => {
  const { editorContent, setEditorContent } = props;
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={editorContent}
        // onReady={(editor) => {
        //   editor.plugins.get("FileRepository").createUploadAdapter = (
        //     loader
        //   ) => {
        //     return new ImageUploadAdapter(loader);
        //   };
        // }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorContent(data);
        }}
      />
    </>
  );
};

export default CkEditor;
