import Typewriter from "../components/Typewriter.js";
import "./Socials.css";

export default function Socials() {
  return (
    <section className="screenSection">

      <div className="sectionContent" style={{
        flexDirection: "column",
      }}>
        <div className="introText">
          <Typewriter lines={[
            "Haha jk"
          ]} letterTime={40} lineTime={200} />
        </div>

        <div className="logoContainer">

          <a className="logoIcon github" href="https://github.com/kriepiekrollie">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
              <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <div className="tooltip">
              Github
            </div>
          </a>

          <a className="logoIcon discord" href="https://discordapp.com/users/468827798392274944">
            <svg aria-hidden="true" viewBox="0 0 512 512" version="1.1" data-view-component="true">
              <path fill="currentColor" d="m256,0C114.62,0,0,114.62,0,256s114.62,256,256,256,256-114.62,256-256S397.38,0,256,0Zm92.14,400.85c-7.82-10.5-14.73-21.64-20.67-33.3,11.31-4.23,22.22-9.44,32.61-15.57-2.7-1.83-5.37-3.87-7.98-6-61.11,28.74-131.85,28.74-192.96,0-2.58,1.98-5.25,4.02-7.98,6,10.38,6.12,21.27,11.32,32.55,15.54-5.94,11.67-12.85,22.82-20.67,33.33-17.35-5.26-34.18-11.99-50.33-20.09-16.14-8.11-31.59-17.59-46.18-28.36-6.75-70.83,6.75-142.68,56.55-216.36,25.09-11.48,51.56-19.64,78.75-24.27,3.72,6.65,7.08,13.48,10.08,20.49,28.95-4.37,58.39-4.37,87.33,0,3-7.01,6.36-13.85,10.08-20.49,27.18,4.59,53.63,12.73,78.69,24.21,37.24,54.45,58.32,114.92,58.32,183.23,0,10.87-.53,21.94-1.62,33.22-29.17,21.56-61.83,37.94-96.57,48.42Z"/>
              <path fill="currentColor" d="m353.27,270.77c-.33,21-15.12,38.07-34.29,38.07s-34.32-17.07-34.32-38.07,15-38.22,34.32-38.22,34.62,17.22,34.29,38.22Z"/>
              <path fill="currentColor" d="m226.58,270.77c-.33,21-15.15,38.07-34.32,38.07s-34.35-17.07-34.35-38.07,15-38.22,34.29-38.22,34.71,17.22,34.38,38.22Z"/>
            </svg>
            <div className="tooltip">
              Discord
            </div>
          </a>

          <a className="logoIcon codeforces" href="https://codeforces.com/profile/kriepiekrollie">
            <svg aria-hidden="true" viewBox="0 0 512 512" version="1.1" data-view-component="true">
              <path fill="currentColor" d="m256,0C114.62,0,0,114.62,0,256s114.62,256,256,256,256-114.62,256-256S397.38,0,256,0Zm-82.47,373.19c0,11.76-9.6,21.6-21.6,21.6h-51.12c-11.76,0-21.6-9.6-21.6-21.6v-155.28c0-11.76,9.6-21.6,21.6-21.6h51.12c12,0,21.84,9.6,21.6,21.6v155.28Zm130.32,0c0,11.76-9.6,21.6-21.6,21.6h-51.12c-11.76,0-21.6-9.6-21.6-21.6v-233.76c0-11.76,9.6-21.6,21.6-21.6h51.12c12,0,21.6,9.84,21.6,21.6v233.76Zm129.84,0c0,11.76-9.6,21.6-21.6,21.6h-51.12c-11.76,0-21.6-9.6-21.6-21.6v-125.52c0-11.76,9.6-21.6,21.6-21.6h51.12c12,0,21.6,9.6,21.6,21.6v125.52Z"/>
            </svg>
            <div className="tooltip">
              Codeforces
            </div>
          </a>

          <a className="logoIcon steam" href="https://steamcommunity.com/id/kriepiekrollie/">
            <svg aria-hidden="true" viewBox="0 0 89.3 89.3" version="1.1" data-view-component="true">
              <path fill="currentColor" d="M44.2,0.6C21,0.6,2,18.5,0.2,41.3l23.7,9.8c2-1.4,4.4-2.2,7-2.2c0.2,0,0.5,0,0.7,0l10.5-15.3c0-0.1,0-0.1,0-0.2
                c0-9.2,7.5-16.7,16.7-16.7c9.2,0,16.7,7.5,16.7,16.7S68,50.1,58.8,50.1c-0.1,0-0.3,0-0.4,0l-15,10.7c0,0.2,0,0.4,0,0.6
                c0,6.9-5.6,12.5-12.5,12.5c-6.1,0-11.1-4.3-12.3-10.1l-17-7C6.9,75.5,24,89.1,44.2,89.1c24.4,0,44.2-19.8,44.2-44.2
                C88.5,20.4,68.7,0.6,44.2,0.6"/>
              <path fill="currentColor" d="M27.9,67.7l-5.4-2.2c1,2,2.6,3.7,4.8,4.6c4.8,2,10.3-0.3,12.3-5.1c1-2.3,1-4.9,0-7.2c-1-2.3-2.8-4.1-5.1-5.1
                c-2.3-1-4.8-0.9-6.9-0.1l5.6,2.3c3.5,1.5,5.2,5.5,3.7,9C35.5,67.5,31.4,69.2,27.9,67.7"/>
              <path fill="currentColor" d="M69.9,33.4c0-6.1-5-11.1-11.1-11.1c-6.1,0-11.1,5-11.1,11.1c0,6.1,5,11.1,11.1,11.1
                C65,44.5,69.9,39.6,69.9,33.4 M50.5,33.4c0-4.6,3.7-8.4,8.4-8.4s8.4,3.7,8.4,8.4s-3.7,8.3-8.4,8.3S50.5,38,50.5,33.4"/>
            </svg>
            <div className="tooltip">
              Steam
            </div>
          </a>

          <a className="logoIcon osu" href="https://osu.ppy.sh/users/15668934">
            <svg aria-hidden="true" viewBox="0 0 350 350" version="1.1" data-view-component="true">
              <path fill="currentColor" d="M87.6,211.6c-5.5,0-10.3-0.9-14.4-2.7c-4.1-1.8-7.5-4.3-10-7.5
                c-2.7-3.2-4.7-6.9-6.1-11.2c-1.4-4.3-2-8.9-2-13.9s0.7-9.7,2-14c1.4-4.3,3.4-8.2,6.1-11.3c2.7-3.1,6.1-5.7,10-7.6s8.9-2.8,14.4-2.8
                c5.5,0,10.3,0.9,14.3,2.8c4.1,1.9,7.5,4.3,10.3,7.6c2.7,3.2,4.7,7,6.1,11.3c1.3,4.3,2,9,2,14c0,5-0.7,9.6-2,13.9s-3.3,8-6.1,11.2
                c-2.7,3.1-6.1,5.7-10.3,7.5C98,210.8,93.1,211.6,87.6,211.6z M87.6,197.5c4.9,0,8.4-1.9,10.5-5.5c2.1-3.6,3.1-8.9,3.1-15.6
                s-1.1-12-3.1-15.6c-2.1-3.6-5.6-5.5-10.5-5.5c-4.8,0-8.3,1.9-10.4,5.5s-3.1,8.9-3.1,15.6c0,6.8,1,12,3.1,15.6
                C79.3,195.8,82.8,197.5,87.6,197.5z M148,180.6c-4.9-1.4-8.8-3.5-11.4-6.2c-2.8-2.8-4.1-6.9-4.1-12.4c0-6.6,2.3-11.8,7.1-15.6
                c4.8-3.7,11.2-5.6,19.5-5.6c3.4,0,6.8,0.4,10,0.9c3.3,0.6,6.6,1.5,10,2.8c-0.2,2.2-0.6,4.7-1.3,7.1c-0.7,2.4-1.5,4.5-2.5,6.4
                c-2.1-0.8-4.4-1.6-6.9-2.3c-2.6-0.7-5.2-0.9-7.9-0.9c-2.9,0-5.2,0.5-6.9,1.4c-1.6,0.9-2.4,2.3-2.4,4.4c0,1.9,0.6,3.3,1.8,4.1
                c1.2,0.8,2.8,1.5,5,2.2l7.5,2.2c2.5,0.7,4.7,1.5,6.6,2.6c2,1.1,3.6,2.2,5,3.7c1.4,1.5,2.5,3.3,3.3,5.5c0.8,2.2,1.2,4.9,1.2,7.9
                c0,3.3-0.7,6.2-2,9c-1.4,2.8-3.3,5.2-5.8,7.2c-2.6,2.1-5.7,3.6-9.3,4.9c-3.6,1.2-7.8,1.8-12.5,1.8c-2.1,0-4-0.1-5.7-0.2
                c-1.8-0.1-3.4-0.4-5-0.7c-1.6-0.3-3.1-0.7-4.8-1.2c-1.5-0.5-3.3-1-5.1-1.8c0.1-2.3,0.6-4.8,1.3-7.1c0.7-2.5,1.5-4.8,2.6-7
                c2.9,1.2,5.6,2,8.2,2.6c2.6,0.6,5.2,0.8,8,0.8c1.2,0,2.6-0.1,4-0.4c1.4-0.2,2.8-0.6,4-1.2c1.2-0.6,2.2-1.3,3-2.2
                c0.8-0.9,1.3-2.1,1.3-3.6c0-2.1-0.6-3.6-1.9-4.5c-1.3-0.9-3-1.8-5.2-2.5L148,180.6z M193.9,142.5c3.1-0.5,6.2-0.8,9.3-0.8
                c3,0,6.2,0.2,9.3,0.8v35.8c0,3.6,0.2,6.5,0.8,8.9c0.6,2.3,1.4,4.2,2.6,5.5c1.2,1.4,2.7,2.3,4.4,2.9s3.9,0.8,6.2,0.8
                c3.3,0,5.9-0.4,8.2-0.9v-53c3.1-0.5,6.2-0.8,9.2-0.8c3,0,6.2,0.2,9.3,0.8v65.1c-2.8,0.9-6.5,1.9-11.1,2.8
                c-4.5,0.9-9.3,1.4-14.3,1.4c-4.4,0-8.8-0.4-12.8-1c-4.1-0.7-7.7-2.2-10.8-4.4c-3.2-2.2-5.6-5.6-7.4-9.9c-1.9-4.3-2.8-10.1-2.8-17.4
                v-36.5H193.9z M270.8,210.1c-0.5-3.3-0.8-6.4-0.8-9.6c0-3.2,0.2-6.4,0.8-9.7c3.3-0.5,6.4-0.8,9.6-0.8c3.1,0,6.4,0.2,9.7,0.8
                c0.5,3.3,0.8,6.5,0.8,9.6c0,3.3-0.2,6.4-0.8,9.7c-3.3,0.5-6.5,0.8-9.6,0.8C277.2,210.8,274,210.6,270.8,210.1z M270.3,116
                c3.4-0.5,6.8-0.8,10-0.8c3.4,0,6.8,0.2,10.3,0.8l-1.3,64c-3,0.5-6,0.8-8.8,0.8c-2.9,0-6-0.2-8.9-0.8L270.3,116z"/>
              <path fill="currentColor" d="M175,0C78.4,0,0,78.4,0,175s78.4,175,175,175s175-78.4,175-175S271.6,0,175,0z M175,332.5
                C88,332.5,17.5,262,17.5,175S88,17.5,175,17.5S332.5,88,332.5,175S262,332.5,175,332.5z"/>
            </svg>
            <div className="tooltip">
              osu!
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
