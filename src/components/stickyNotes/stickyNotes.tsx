import React from "react";
import ReactStickies from "react-stickies"; //ES6
import {
  RiStickyNoteFill,
  RiSave3Fill,
  RiCloseLine,
} from "react-icons/ri";
import styles from "./stickyNotes.module.scss";
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
      <Flex className={styles.icons}>
        {areNotesVisible ? (
          <>
          <RiSave3Fill
              className={classNames(styles.icon, {[styles.saved]: areNotesSaved})}
              size={24}
              onClick={() => onSave()}
            />
            <RiCloseLine
              className={classNames(styles.icon, styles.remove)}
              size={24}
              onClick={() => setAreNotesVisible(false)}
            />
          </>
        ) : (
          <RiStickyNoteFill
            className={styles.icon}
            size={24}
            onClick={() => setAreNotesVisible(true)}
          />
        )}
      </Flex>
      <Flex
        className={classNames(styles.stickyNotes, {
          [styles.visible]: areNotesVisible,
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
