import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Entry = ({ symp }) => {
  const converter = new QuillDeltaToHtmlConverter(symp.content.ops, {});
  const contentHTML = converter.convert();

  return (
    <article className="post container">
      <h1>{symp.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </article>
  );
};

export default Entry;
