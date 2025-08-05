interface Props {
  name: string;
  intro: string;
}

const IntroCard = ({ name, intro }: Props) => {
  return (
    <div className="floating-card border rounded-lg p-4 shadow bg-white w-64">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm">{intro}</p>
    </div>
  );
};

export default IntroCard;
