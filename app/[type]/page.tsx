interface MediaPageProps {
  params: {
    type: string;
  };
}

const MediaPage = ({ params }: MediaPageProps) => {
  return (
    <div>
      <h1>Hello world! {params.type}</h1>
    </div>
  );
};

export default MediaPage;
