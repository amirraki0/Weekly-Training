import react, { useState } from "react";
import "./Tabs.css";
function Tabs() {
  const [tab, activeTab] = useState(0);
  const homeButton = () => {
    activeTab((tab) => (tab = 1));
  };
  const coursesButton = () => {
    activeTab((tab) => (tab = 2));
  };
  const contentButton = () => {
    activeTab((tab) => (tab = 3));
  };
  const aboutButton = () => {
    activeTab((tab) => (tab = 4));
  };

  return (
    <>
      <div>
        <h1 className="title">Botostart Teching Programing Website</h1>
      </div>
      <div className="tabs">
        <button className="button" onClick={homeButton}>
          Home
        </button>
        <button className="button" onClick={coursesButton}>
          courses
        </button>
        <button className="button" onClick={contentButton}>
          content
        </button>
        <button className="button" onClick={aboutButton}>
          about us
        </button>
      </div>
      {tab === 1 ? (
        <div className="description">
          <h3>Home Page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            perspiciatis voluptatem consequatur quia, quisquam blanditiis labore
            possimus veritatis necessitatibus reprehenderit temporibus sapiente
            molestias similique, at sequi id dolor! Nobis, fugit..
          </p>
        </div>
      ) : tab === 2 ? (
        <div className="description">
          <h3>Courses Page</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
            recusandae!
          </p>
        </div>
      ) : tab === 3 ? (
        <div className="description">
          <h3>ContentPage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex
            sit qui fuga itaque? Provident..
          </p>
        </div>
      ) : tab === 4 ? (
        <div className="description">
          <h3>About us</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      ) : null}
    </>
  );
}

export default Tabs;

// import { useState } from "react";

// function Tabs() {
//   const [activeTab, setActiveTab] = useState(1);

//   const tabs = [
//     {
//       id: 1,
//       title: "TAB 1",
//       heading: "Content 1",
//       paragraph: "Paragraph for content 1",
//     },
//     {
//       id: 2,
//       title: "TAB 2",
//       heading: "Content 2",
//       paragraph: "Paragraph for content 2",
//     },
//     {
//       id: 3,
//       title: "TAB 3",
//       heading: "Content 3",
//       paragraph: "Paragraph for content 3",
//     },
//     {
//       id: 4,
//       title: "TAB 4",
//       heading: "Content 4",
//       paragraph: "Paragraph for content 4",
//     },
//   ];

//   const selectedTab = tabs.find((tab) => tab.id === activeTab);

//   return (
//     <div>
//       <h1>Tabs Component with React</h1>

//       <div>
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>

//       <h2>{selectedTab.heading}</h2>
//       <p>{selectedTab.paragraph}</p>
//     </div>
//   );
// }

// export default Tabs;
