import { useState } from "react";
import styles from "./Tab.module.scss";
import ClassicGrid from "../ClassicGrid";
import Icons from "@/styles/Icons";


const Tabs = ({ tabData }) => {
    
  const [activeTab, setActiveTab] = useState(0);

  return (

      <div className={styles.tabs}>
        {/* Tab Buttons */}
        <div className={styles.tabList}>
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${activeTab === index ? styles.active : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <Icons size={18} icon={tab?.icon} />
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          <ClassicGrid data={tabData[activeTab]} />
        </div>
      </div>
  );
};

export default Tabs;
