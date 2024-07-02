import React from 'react'

function NamesOfGroups({
  groupName,
  bgColour,
  fontColor = "#000000",
}) {

// make first character uppercase
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
  )
}

export default NamesOfGroups