const Principles = () => {
  return (
    <div className="relative flex w-full flex-col bg-black">
      <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-neutral-900" />
      <div className="flex h-[80vh] min-h-[400px] flex-col items-center justify-center self-center px-4">
        <h2>Developer in the making,</h2>
        <h3 className="w-full text-primary-300">2 Principles in mind</h3>
      </div>
      <div className="flex w-full flex-col gap-32 px-4 py-10 lg:px-24">
        <div className="flex flex-col items-center justify-evenly gap-4 md:flex-row">
          <div className="flex max-w-md flex-col gap-2 md:text-right">
            <h4>Change is constant</h4>
            <p>
              In the world of coding, multiple technologies and tools always
              change over time. Adaptation is a requirement in order to create
              effective software, improving both developer and user experience
              on development and engineered products.
            </p>
          </div>
          <div className="h-96 w-64 bg-neutral-800 text-center">image here</div>
        </div>
        <div className="flex flex-col items-center justify-evenly gap-4 md:flex-row">
          <div className="h-96 w-64 bg-neutral-800 text-center">image here</div>
          <div className="flex max-w-md flex-col gap-2">
            <h4>There&apos;s always room for improvement</h4>
            <p>
              Mistakes are normal in software development. Perfect development
              without errors is inexistent in any workflow. Engineering
              softwares is a work of trial and error, constantly improving
              what&apos;s best for both developers and the users.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-28 w-full bg-gradient-to-t from-neutral-900" />
    </div>
  );
};

export default Principles;
