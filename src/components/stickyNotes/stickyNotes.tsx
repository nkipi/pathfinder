import React from "react";
import ReactStickies from "react-stickies"; //ES6
import {
  RiStickyNoteFill,
  RiSave3Fill,
  RiCloseLine,
} from "react-icons/ri";
import  "./stickyNotes.scss";
import classNames from "classnames";
import { Flex } from "../layout/flex";

export const StickyNotes: React.FC = () => {
  const [areNotesVisible, setAreNotesVisible] = React.useState(false);
  const [areNotesSaved, setAreNotesSaved] = React.useState(true);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes !== null) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  return (
    <>
      <Flex className={"stickyNotesIcons"}>
        {areNotesVisible ? (
          <>
          <RiSave3Fill
              className={classNames("stickyNotesIcon", {["saved"]: areNotesSaved})}
              size={24}
              onClick={() => onSave()}
            />
            <RiCloseLine
              className={classNames("stickyNotesIcon", "remove")}
              size={24}
              onClick={() => setAreNotesVisible(false)}
            />
          </>
        ) : (
          <RiStickyNoteFill
            className={"stickyNotesIcon"}
            size={24}
            onClick={() => setAreNotesVisible(true)}
          />
        )}
      </Flex>
      <Flex
        className={classNames("stickyNotes", {
          ["visible"]: areNotesVisible,
        })}
      >
        <ReactStickies notes={notes} onChange={(n: any) => onChange(n)} />
      </Flex>
    </>
  );

  function onChange(notes: any) {
    setNotes(notes);
    setAreNotesSaved(false);
  }

  function onSave() {
    notes.map((note: any) => {
      return delete note.editorState;
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    setAreNotesSaved(true);
  }
};
