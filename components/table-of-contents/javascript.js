import { useId } from "react";
import styles from "./toc.module.css";
import useLocalesMap from "./../use-locales-map";
import { javaScriptTOCMap } from "./../../course-contents/javascript";

export function Topic({ text }) {
    return (
      <div className={styles.topic}>
        <h4>{text}</h4>
      </div>
    );
  }




export default function JavaScriptTOC() {
  const keyId = useId();
  const title = "useLocalesMap(titleMap)";
  const features = useLocalesMap(javaScriptTOCMap);

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">Javascript</p>
      <div className={styles.toc}>
        {Object.keys(features).map(( key, index ) => (
          <Topic text={index+1 + ".  " + features[key]} key={keyId + key} />
        ))}
      </div>
    </div>
  );
}