import { WHAT_IN_MIND_BASE_URL } from "../utils/constant";
const WhatIsInMind = (props) => {
  const { imageGridCards, header } = props.data.card.card;
  const { info } = imageGridCards;
  return (
    <>
      <h1 className="what-in-mind-title"> {header.title} </h1>
      <div className="what-in-mind">
        {info.map((data) => (
          <WhatIsInMindCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

const WhatIsInMindCard = (props) => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="what-in-mind-card">
      <img src={WHAT_IN_MIND_BASE_URL + data.imageId} />
    </div>
  );
};
export { WhatIsInMind, WhatIsInMindCard };
