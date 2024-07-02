import React from "react";
import styles from "./GroupNames.module.css";

export default function GroupNames({
  groupName,
  bgColour,
  fontColor = "#000000",
}) {
   
  const groupNameSplit = groupName.split(' ');
  const GroupNameTrim =
    groupNameSplit[0].charAt(0).toUpperCase() +
    (groupNameSplit[1] ? groupNameSplit[1].charAt(0).toUpperCase() : "");

  return (
    <div className={styles.groupName}>
      <div
        className={styles.groupNameTrim}
        style={{ backgroundColor: bgColour }}
      >
        {GroupNameTrim}
      </div>
      <h3 style={{ color: fontColor }}>{groupName}</h3>
    </div>
  );
}

 
