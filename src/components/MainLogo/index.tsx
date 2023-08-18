interface Props {
  isLink?:boolean;
}

const MainLogo = ({ isLink = false }: Props) => {
  if (isLink) {
    return (
      <a href="/">
        <div className="text-4xl font-bold">
          NBB<span className="text-pink-600">.</span> 
        </div>
      </a>
    );
  }

  return (
    <div className="text-4xl font-bold">
      NBB<span className="text-pink-600">.</span> 
    </div>
  );
};

export default MainLogo;
