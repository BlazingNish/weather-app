// Loading Compnent which is shown while data is being fetched from API

const Loading = () => {
  return (
    <div className="loading flex flex-col mt-20 mx-auto md:flex-row space-y-20">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
