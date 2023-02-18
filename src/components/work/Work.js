import Works from "../Works";

const Work = () => {
  const workData = [
    {
      title: "Project Plan",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority",
    },
    {
      title: "Interior Work",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority.",
    },
    {
      title: "Realization",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority.",
    },
  ];
  return <Works dataArray={workData} />;
};

export default Work;
