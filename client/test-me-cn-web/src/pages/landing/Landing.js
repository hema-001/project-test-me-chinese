import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import { Links } from "../../links/links";

export default function MainPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.banner}>
            <div className={styles.banner_title}>Memoraize with Style</div>
            <div className={styles.banner_text}>Test your progress in learning new Chinse characters and challenge yourself.</div>
              <Link 
                to={Links.SignInPage.path}>
                  <button 
                    className={styles.action_btn}>
                      Get Started
                  </button>
                </Link>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.cards_container}>
            <div className={styles.card}>
              <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.overlay}>
                card
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
            <div className={styles.about_card}>About</div>
            <div className={styles.about_card}>About</div>
          </div>
        <div className={styles.side}>
          <div className={styles.side_card}>card</div>
          <div className={styles.side_card}>card</div>
          <div className={styles.side_card}>card</div>
          <div className={styles.side_card}>card</div>
        </div>
        <div className={styles.copy_right}>© 2023 Copyright: Ibrahim M. I. Ismail</div>
      </div>
    </>
  );
}