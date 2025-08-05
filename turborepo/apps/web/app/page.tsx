"use client";

import { Button, appContent } from "@repo/ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>{appContent.webTitle}</h1>
      <p>{appContent.welcome} {appContent.webDescription}</p>
      <p>{appContent.sharedDescription}</p>
      <Button onClick={() => console.log(appContent.buttonLogMessage)} text={appContent.buttonText} />
      <p>{appContent.testText}</p>
      <p>{appContent.additionalContent}</p>
    </div>
  );
}
