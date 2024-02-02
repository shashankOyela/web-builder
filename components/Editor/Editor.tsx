import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { Cases } from "@/app/form/page";

const Editor = ({ dispatch }: any) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor&nbsp;5!</p>"
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor.getData());
      }}
      onChange={(event, editor) => {
        // console.log("change", event);
        // console.log("editor", editor.getData());
        dispatch({
          type: Cases.setEditorData,
          editorData: editor.getData(),
        });
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};

export default Editor;
