interface Props {
  name: string;
  intro: string;
}

const IntroCard = ({ name, intro }: Props) => {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm">{intro}</p>
    </div>
  );
};

export default IntroCard;
