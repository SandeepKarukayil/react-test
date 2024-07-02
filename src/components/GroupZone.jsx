import styles from "./GroupZone.module.css";
import GroupNames from "../GroupNames/GroupNames";
import { useParams, Link } from "react-router-dom";
import { getWidth } from "../../context/widthContext";

const selected = {
  backgroundColor: "#2f2f2f2b",
  borderRadius: "1rem",
};

function GroupZone({ groups, TriggerCreateGroup }) {
  const { groupId } = useParams();
  const screenWidth = getWidth();

  return (
    <div
      className={`${styles.groupZone} ${
        groupId && screenWidth < 767 ? "remove" : ""
      }`}>
      <div className={styles.title}>
        <span>Pocket Notes</span>
      </div>
      <div className={styles.groupsBox}>
        {groups?.map((group) => (
          <div
            key={group.groupId}
            style={group.groupId === groupId ? selected : {}}>
            <Link
              to={`/notes/${group.groupId}`}
              replace={screenWidth < 767 ? false : true}>
              <GroupNames
                groupName={group.groupName}
                bgColour={group.bgColour}
              />
            </Link>
          </div>
        ))}
      </div>
      <button
        className={styles.addButton}
        title=" Click To Add Group"
        onClick={TriggerCreateGroup}>
        +
      </button>
    </div>
  );
}

export default GroupZone
